terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.48.0"
    }
  }
  backend "s3" {
    bucket = "financialflows.terraform"
    key    = "eu-west-1/comparator/prd/terraform.tfstate"
    region = "eu-west-1"
  }
}

variable "AWS_ACCESS_KEY" {

}

variable "AWS_SECRET_ACCESS_KEY" {

}

variable "container_version" {
  description = "The version of the image to push."
  type        = string
}

provider "aws" {
    region = "eu-west-1"
}

locals {
  tags = {
    Environment     = "stg"
    "Business Unit" = "Cimpress"
    Squad           = "Amarok"
  }
}
