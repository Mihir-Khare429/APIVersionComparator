variable "lambda_arn" {
  description = "The ARN of the lambda role that secret access should be granted to."
  type        = string
  default     = null
}

variable "secret_arns" {
  description = "The secrets the rotation lambda should be granted access to."
  type        = set(string)
  default     = null
}
