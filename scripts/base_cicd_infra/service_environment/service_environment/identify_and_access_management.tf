data "aws_caller_identity" "current" {}

locals {
  iam_nonprd_arns = var.iam_nonprd_arns != null ? var.iam_nonprd_arns : [
    "arn:aws:ssm:eu-west-1:${data.aws_caller_identity.current.account_id}:parameter/services/common/*",
    "arn:aws:ssm:eu-west-1:${data.aws_caller_identity.current.account_id}:parameter/services/common/${lower(var.service_name)}/*",
    "arn:aws:ssm:eu-west-1:${data.aws_caller_identity.current.account_id}:parameter/services/fea/${lower(var.service_name)}/*",
    "arn:aws:ssm:eu-west-1:${data.aws_caller_identity.current.account_id}:parameter/services/local/${lower(var.service_name)}/*",
    "arn:aws:ssm:eu-west-1:${data.aws_caller_identity.current.account_id}:parameter/services/stg/${lower(var.service_name)}/*",
    "arn:aws:ssm:eu-west-1:${data.aws_caller_identity.current.account_id}:parameter/services/tmp/${lower(var.service_name)}/*",
  ]

  iam_prd_arns = var.iam_prd_arns != null ? var.iam_prd_arns : [
    "arn:aws:ssm:eu-west-1:${data.aws_caller_identity.current.account_id}:parameter/services/common/*",
    "arn:aws:ssm:eu-west-1:${data.aws_caller_identity.current.account_id}:parameter/services/common/${lower(var.service_name)}/*",
    "arn:aws:ssm:eu-west-1:${data.aws_caller_identity.current.account_id}:parameter/services/prd/${lower(var.service_name)}/*",
  ]
}

# The assume role policy.
# This is a special policy that doesn't have an associated resource, but is tacked onto the role when created.
data "aws_iam_policy_document" "assume_role_policy_document" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      identifiers = ["ecs-tasks.amazonaws.com"]
      type = "Service"
    }
  }
}

# The policy for parameter store.
data "aws_iam_policy_document" "parameter_store_policy_document" {
  statement {
    actions = ["ssm:DescribeParameters"]
    resources = ["*"]
  }

  statement {
    actions = [
      "ssm:GetParameter",
      "ssm:GetParameterHistory",
      "ssm:GetParameters",
      "ssm:GetParametersByPath",
    ]
    resources = lower(var.service_environment) == "prd" ? local.iam_prd_arns : local.iam_nonprd_arns
  }
}

# Create an IAM role for the service and environment.
resource "aws_iam_role" "iam_role" {
  assume_role_policy = data.aws_iam_policy_document.assume_role_policy_document.json
  name = "${lower(var.service_name)}-${lower(var.service_environment)}-taskprofile"
  path = "/"
  tags = var.tags
}

# Attach an inline policy for parameter store permissions to the IAM role.
resource "aws_iam_role_policy" "parameter_store_policy_attachment" {
  name = "${lower(var.service_name)}-${lower(var.service_environment)}-parameterstore"
  role = aws_iam_role.iam_role.name
  policy = data.aws_iam_policy_document.parameter_store_policy_document.json
}

# Attach the shared policy for shared resources to the IAM role.
resource "aws_iam_role_policy_attachment" "shared_resources_policy_attachment" {
  role = aws_iam_role.iam_role.name
  policy_arn = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:policy/SharedResourcesServicePolicy"
}

# Attach the shared policy for SSM to the IAM role.
resource "aws_iam_role_policy_attachment" "ssm_policy_attachment" {
  role = aws_iam_role.iam_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonEC2RoleforSSM"
}

# Give the IAM role on the service access to the secrets
data "aws_iam_policy_document" "secrets_access_policy" {
  statement {
    effect = "Allow"

    actions = [
      "secretsmanager:GetSecretValue"
    ]

    resources = var.secret_arns
  }

  statement {
    effect = "Allow"

    actions = [
      "secretsmanager:ListSecrets"
    ]

    resources = [
      "*"
    ]
  }
}

resource "aws_iam_role_policy" "secrets_manager_policy" {
  count  = var.secret_arns == null ? 0 : 1
  name   = "${lower(var.service_name)}-${lower(var.service_environment)}-secretsmanager"
  role   = aws_iam_role.iam_role.name
  policy = data.aws_iam_policy_document.secrets_access_policy.json
}

output "iam_role_id" {
  value = aws_iam_role.iam_role.id
  description = "The id of the IAM role for the service."
}

output "iam_role_name" {
  value = aws_iam_role.iam_role.name
  description = "The name of the IAM role for the service."
}