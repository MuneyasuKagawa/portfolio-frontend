variable "aws_region" {
  type        = string
  description = "AWS Region"
  default     = "ap-northeast-1"
}

variable "aws_secret_key" {
  type        = string
  description = "secret key"
}

variable "aws_access_key" {
  type        = string
  description = "access key"
}

variable "route53_zone_id" {
  description = "Route53 zone ID"
  type        = string
}

variable "domain_name" {
  description = "Domain name"
  type        = string
}

variable "www_domain_name" {
  description = "WWW domain name"
  type        = string
}
