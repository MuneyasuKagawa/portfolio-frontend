module "s3_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"
  version = "3.14.1"
  bucket = "portfolio-frontend-mk"
}

module "cloudfront" {
  source = "terraform-aws-modules/cloudfront/aws"
  version = "3.4.1"
  is_ipv6_enabled = true
  enabled = true
  price_class = "PriceClass_100"
  retain_on_delete = false
  wait_for_deployment = false

  aliases = [var.domain_name, var.www_domain_name]

  viewer_certificate = {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method  = "sni-only"
  }

  create_origin_access_identity = true
  origin_access_identities = {
    "oai-nextjs" = "cloudfront s3 for nextjs website"
  }

  origin = {
    s3 = {
      domain_name = module.s3_bucket.s3_bucket_bucket_regional_domain_name
      s3_origin_config = {
        origin_access_identity = "oai-nextjs"
      }
    }
  }

  default_cache_behavior = {
    target_origin_id = "s3"
    allowed_methods = ["GET", "HEAD", "OPTIONS"]
    cache_methods = ["GET", "HEAD", "OPTIONS"]
    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 0
    default_ttl = 3600
    max_ttl = 86400
    compress = true

    function_association = {
      viewer-request = {
        function_arn = aws_cloudfront_function.redirect_to_custom_domain.arn
      }
    }
  }

  custom_error_response = [
    {
      error_code = 403
      response_code = 403
      response_page_path = "/index.html"
    }
  ]

  default_root_object = "index.html"
}

data "aws_iam_policy_document" "s3_policy" {
  version = "2012-10-17"

  statement {
    sid = "AllowCloudFrontAccessToS3"
    effect = "Allow"
    actions = ["s3:GetObject"]
    resources = ["${module.s3_bucket.s3_bucket_arn}/*"]
    principals {
      type = "AWS"
      identifiers = module.cloudfront.cloudfront_origin_access_identity_iam_arns
    }
  }
}

resource "aws_s3_bucket_policy" "s3_policy" {
  bucket = module.s3_bucket.s3_bucket_id
  policy = data.aws_iam_policy_document.s3_policy.json
}

data "aws_route53_zone" "main" {
  zone_id = var.route53_zone_id
}

resource "aws_route53_record" "cloudfront" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    evaluate_target_health = false
    name                   = module.cloudfront.cloudfront_distribution_domain_name
    zone_id                = module.cloudfront.cloudfront_distribution_hosted_zone_id
  }
}

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = var.www_domain_name
  type    = "A"

  alias {
    evaluate_target_health = false
    name                   = module.cloudfront.cloudfront_distribution_domain_name
    zone_id                = module.cloudfront.cloudfront_distribution_hosted_zone_id
  }
}

resource "aws_cloudfront_function" "redirect_to_custom_domain" {
  name    = "redirect-to-custom-domain"
  runtime = "cloudfront-js-2.0"
  publish = true
  code    = <<EOF
function handler(event) {
  var request = event.request;
  var host = request.headers.host.value;
  
  if (host !== '${var.domain_name}' && host !== '${var.www_domain_name}') {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        'location': {
          value: 'https://${var.domain_name}' + request.uri
        }
      }
    };
  }
  
  return request;
}
EOF
}

resource "aws_acm_certificate" "cert" {
  provider         = aws.us_east_1
  domain_name       = var.domain_name
  validation_method = "DNS"

  subject_alternative_names = [var.www_domain_name]

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.main.zone_id
}

resource "aws_acm_certificate_validation" "cert" {
  provider = aws.us_east_1
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}
