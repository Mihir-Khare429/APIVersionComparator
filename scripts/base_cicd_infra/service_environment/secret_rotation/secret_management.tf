# Give the rotation lambda access to the secrets
resource "aws_secretsmanager_secret_policy" "example" {
  for_each = var.secret_arns
  secret_arn = each.key

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "EnableAllPermissions",
      "Effect": "Allow",
      "Principal": {
        "AWS": "${var.lambda_arn}"
      },
      "Resource": "*",
      "Action": [
        "secretsmanager:DescribeSecret",
        "secretsmanager:GetSecretValue",
        "secretsmanager:PutSecretValue",
        "secretsmanager:UpdateSecretVersionStage"
      ]
    }
  ]
}
POLICY
}
