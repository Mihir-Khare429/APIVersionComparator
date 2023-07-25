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

variable "container_version" {
  description = "The version of the image to push."
  type        = string
}

variable "task_profile_role_arn" {
  description = "ARN for the task profile role"
  type = string
  default = "arn:aws:iam::710170054012:role/comparatorproductprice-nonprd-taskprofile"
}

variable "task_profile_role_name" {
  type = string
  default = "comparatorproductprice-nonprd-taskprofile"
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
  container_variables = [
    { name = "ENVIRONMENT", value = "staging" },
    { name = "DEPLOYMENT_NAME", value = "stg" },
  ]
}

module "service_environment_stg" {
  source = "./base_cicd_infra/service_environment/service_environment"

  container_port      = 80
  container_memory    = 500
  container_variables = local.container_variables
  container_version   = var.container_version

  on_image_deploy = "bash ./deploy-image.sh"

  scaling_capacity_max = 4
  scaling_capacity_min = 0

  service_cluster                    = "ecs-service-cluster-nonprod"
  service_count                      = 1
  deployment_maximum_percent         = 200
  deployment_minimum_healthy_percent = 50

  service_environment = "nonprd"
  service_name        = "comparatorProductPrice"

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

resource "aws_ecs_task_definition" "comparatorProductPrice-nonprd" {
  family                   = "comparatorProductPrice-nonprd"
  container_definitions    = <<CONTAINER_DEFINITIONS
                            [
                              {
                                "name": "comparatorProductPrice-nonprd",
                                "image": "710170054012.dkr.ecr.eu-west-1.amazonaws.com/comparatorproductprice-nonprd:latest:${var.container_version}",
                                "memory": 4800,
                                "logConfiguration": {
                                  "logDriver": "awslogs",
                                  "options": {
                                    "awslogs-group": "/ecs/comparatorProductPrice-nonprd",
                                    "awslogs-region": "eu-west-1",
                                    "awslogs-stream-prefix": "ecs"
                                  }
                                }
                              }
                            ]
                            CONTAINER_DEFINITIONS
}

resource "aws_iam_policy" "sqs_recieve_message_policy" {
  name = "ComaparatorSQSReadPolicy"
  policy = jsonencode(
    {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "sqs:DeleteMessage",
                "sqs:StartMessageMoveTask",
                "sqs:GetQueueUrl",
                "sqs:CancelMessageMoveTask",
                "sqs:ChangeMessageVisibility",
                "sqs:ListMessageMoveTasks",
                "sqs:ReceiveMessage",
                "sqs:SendMessage",
                "sqs:GetQueueAttributes",
                "sqs:ListQueueTags",
                "sqs:ListDeadLetterSourceQueues",
                "sqs:PurgeQueue",
                "sqs:DeleteQueue",
                "sqs:CreateQueue",
                "sqs:SetQueueAttributes"
            ],
            "Resource": "arn:aws:sqs:eu-west-1:710170054012:comparatorServiceSQS"
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": "sqs:ListQueues",
            "Resource": "*"
        }
      ]
    }
  )
}

resource "aws_iam_role_policy_attachment" "attachSQSPolicy" {
  role = var.task_profile_role_name
  policy_arn = aws_iam_policy.sqs_recieve_message_policy.arn
}

