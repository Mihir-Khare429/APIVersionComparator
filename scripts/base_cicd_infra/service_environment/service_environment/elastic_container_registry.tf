locals {
  ecr_lifecycle_policy = <<EOT
  {
    "rules": [
      {
        "action": {
          "type": "expire"
        },
        "description": "Expire all images aside from the last ten",
        "rulePriority": 1,
        "selection": {
          "countNumber": 10,
          "countType": "imageCountMoreThan",
          "tagStatus": "any"
        }
      }
    ]
  }
  EOT
  ecr_repository_name = "${lower(var.service_name)}-${lower(var.service_environment)}"
}

resource "aws_ecr_repository" "ecr_repository" {
  #ts:skip=AC_AWS_0462 Need to discuss with team what a policy on the ECR repository would look like.
  name = local.ecr_repository_name

  image_tag_mutability = "IMMUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  encryption_configuration {
    encryption_type = "KMS"
    kms_key         = aws_kms_key.kms_key.arn
  }
}

resource "aws_ecr_lifecycle_policy" "ecr_lifecycle_policy" {
  policy = local.ecr_lifecycle_policy
  repository = aws_ecr_repository.ecr_repository.name
}

resource "null_resource" "on_image_deploy_hook" {
  count = var.on_image_deploy != "" ? 1 : 0
  triggers = {
    container_version = var.container_version
  }

  provisioner "local-exec" {
    command = var.on_image_deploy
    environment = {
      REMOTE_IMAGE_TAG = "${aws_ecr_repository.ecr_repository.repository_url}:${var.container_version}"
    }
  }
}

output "ecr_repository_url" {
  value = aws_ecr_repository.ecr_repository.repository_url
}
