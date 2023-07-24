terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.48.0"
    }
  }
  backend "s3" {
    bucket = "financialflows.terraform"
    key    = "eu-west-1/comparator/stg/terraform.tfstate"
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

module "service_environment_stg" {
  source = "git::ssh://git@gitlab.com/cimpress-technology/ff/infrastructure.ci.cd/modules/ecs-service.git//service_environment?ref=v3.0.1"

  container_port      = 80
  container_memory    = 500
  container_variables = local.container_variables
  container_version   = var.container_version

  on_image_deploy = "bash ../deploy-image.sh"

  scaling_capacity_max = 4
  scaling_capacity_min = 0

  service_cluster                    = "ecs-service-cluster-nonprod"
  service_count                      = 1
  deployment_maximum_percent         = 200
  deployment_minimum_healthy_percent = 50

  service_environment = "nonprd"
  service_name        = "comparatorProductPrice"
  service_region      = "eu-west-1"

  ordered_placement_strategy = [
    {
      type  = "spread"
      field = "attribute:ecs.availability-zone"
    },
    {
      type  = "binpack",
      field = "memory"
    }
  ]

  tags = local.tags

}

