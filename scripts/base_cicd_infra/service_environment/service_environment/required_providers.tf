terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.52"
    }
    null = {
      source  = "hashicorp/null"
      version = ">= 3.1"
    }
  }
}
