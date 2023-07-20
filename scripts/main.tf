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

provider "aws" {
    region = "eu-west-1"
    access_key = var.AWS_ACCESS_KEY
    secret_key = var.AWS_SECRET_ACCESS_KEY
}