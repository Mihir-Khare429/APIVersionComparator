# The policy for the KMS keys.
data "aws_iam_policy_document" "kms_key_policy_document" {
  #checkov:skip=CKV_AWS_111:Need to review this with the team before making any changes to the policy.
  #checkov:skip=CKV_AWS_109:Need to review this with the team before making any changes to the policy.
  statement {
    actions = ["kms:*"]
    resources = ["*"]

    sid = "Enable IAM user permissions"

    principals {
      type = "AWS"
      identifiers = ["arn:aws:iam::${data.aws_caller_identity.current.account_id}:root"]
    }
  }

  statement {
    actions = [
      "kms:Encrypt",
      "kms:Decrypt",
      "kms:ReEncrypt",
      "kms:GenerateDataKey*",
      "kms:DescribeKey"
    ]

    resources = ["*"]
    sid = "Allow use of the key by the service"

    principals {
      type = "AWS"
      identifiers = [aws_iam_role.iam_role.arn]
    }
  }

  statement {
    actions = [
      "kms:CreateGrant",
      "kms:ListGrants",
      "kms:RevokeGrants"
    ]

    resources = ["*"]
    sid = "Allow attachment of persistent resources"

    condition {
      test = "Bool"
      variable = "kms:GrantIsForAWSResource"
      values = ["true"]
    }

    principals {
      type = "AWS"
      identifiers = [aws_iam_role.iam_role.arn]
    }
  }

  dynamic "statement" {
    # dirty hack - only create a single dynamic statement if one or more lambda roles have been specified
    for_each = var.secret_rotation_lambda_roles != null ? [1] : []

    content {
      actions = [
        "kms:Encrypt",
        "kms:Decrypt",
        "kms:ReEncrypt",
        "kms:GenerateDataKey*",
        "kms:DescribeKey"
      ]

      resources = ["*"]
      sid = "Allow use of the key by the secret rotation lambdas."

      principals {
        type = "AWS"
        identifiers = var.secret_rotation_lambda_roles
      }
    }
  }
}

# Create the KMS key for the service.
resource "aws_kms_key" "kms_key" {
  description = "Encryption key for ${lower(var.service_environment == "prd") ? "production" : "non-production"} instances of ${var.service_name}"
  enable_key_rotation = "true"
  policy = data.aws_iam_policy_document.kms_key_policy_document.json
  tags   = var.tags
}

# Create the alias for KMS key for the service.
resource "aws_kms_alias" "kms_key_alias" {
  name = "alias/services-${lower(var.service_name)}-${lower(var.service_environment)}"
  target_key_id = aws_kms_key.kms_key.key_id
}
