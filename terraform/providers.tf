terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.12.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}
