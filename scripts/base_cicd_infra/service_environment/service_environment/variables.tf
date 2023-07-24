
# How much memory is allocated to the service.
# Example: 500
variable "container_memory" {
  default = 500
  description = "How much memory is allocated to the service."
  type = number
}

# The port to run the service on.
# Example: 5000
variable "container_port" {
  description = "The port to run the service on."
  type = number
}

# The list of environment variables to run the container with.
# Example: [ { name = "ASPNETCORE_ENVIRONMENT", value = "Production" } ]
variable "container_variables" {
  description = "The list of environment variables to run the container with."
  type = list(object({ name = string, value = string }))
}

# The version of the container to deploy.
# Example: "setup"
variable "container_version" {
  description = "The version of the container to deploy."
  type = string
}

# The script to run to deploy the container image.
# Example: "sh ./image-deploy.sh"
variable "on_image_deploy" {
  default = ""
  description = "The script to run to deploy the container image."
  type = string
}

# The maximum capacity for scaling.
# Example: 4
variable "scaling_capacity_max" {
  default = 4
  description = "The maximum capacity for scaling."
  type = number
}

# The minimum capacity for scaling.
# Example: 2
variable "scaling_capacity_min" {
  default = 2
  description = "The minimum capacity for scaling."
  type = number
}

# The name of the cluster to host the service on.
# Example: "ecs-service-cluster-nonprod"
variable "service_cluster" {
  description = "The name of the cluster to host the service on."
  type = string
}

# The desired number of services to be running.
# Example: 2
variable "service_count" {
  default = 2
  description = "The desired number of services to be running."
  type = number
}

# Whether to deploy the service to EC2 or Fargate
# Example: "FARGATE"
variable "launch_type" {
  default = "EC2"
  description = "Whether to deploy the service to EC2 or Fargate"
  type = string

  validation {
    condition     = var.launch_type == "EC2" || var.launch_type == "FARGATE"
    error_message = "The launch type must be either EC2 or FARGATE."
  }
}

# What version of the Fargate platform to run your service on. Only applicable if launch_type is FARGATE.
# Example: "1.4.0"
variable "platform_version" {
  description = "What version of the Fargate platform to run your service on. Only applicable if launch_type is FARGATE."
  type        = string
  default     = "1.4.0"
}

# How much ephemeral storage to grant the task. Only applicable if launch type is FARGATE
# Example: 21
variable "ephemeral_storage_in_gib" {
  description = "How much ephemeral storage to grant the task. Only applicable if launch type is FARGATE"
  type        = number
  default     = 21 // Minimum supported value
}

# What subnets to place the Fargate container in. Only applicable if launch_type is FARGATE.
# Example: "subnet-<subnetId>"
variable "subnets" {
  description = "What subnets to place the Fargate container in. Only applicable if launch_type is FARGATE."
  type        = list(string)
  default     = ["subnet-00e81358", "subnet-5442eb22", "subnet-4be9532f"]
}

# The ID of the VPC the task will be deployed in.
# Example: "vpc-<vpcId>"
variable "vpc_id" {
  description = "The ID of the VPC the task will be deployed in."
  type        = string
  default     = "vpc-145b8770"
}

# The security group for the Fargate network configuration. Only applicable if launch_type is FARGATE.
# Example: "sg-<securityGroupId>"
variable "security_group_id" {
  description = "The security group for the Fargate network configuration. Only applicable if launch_type is FARGATE."
  type        = string
  default     = "sg-f0a7b58b"
}

# The maximum percentage of the desired task count that can be running.
# Example: 200
variable "deployment_maximum_percent" {
  default = 200
  description = "The maximum percentage of the desired task count that can be running."
  type = number
}

# The minimum healthy percentage of the desired count to keep running.
# Example: 50
variable "deployment_minimum_healthy_percent" {
  default = 50
  description = "The minimum healthy percentage of the desired count to keep running."
  type = number
}

# The environment to run the service in.
# Example: "prd" or "nonprd"
variable "service_environment" {
  description = "The environment to run the service in."
  type = string
}

# The path to the service's health check route.
# Example: "/healthcheck"
variable "service_healthcheck" {
  default = "/healthcheck"
  description = "The path to the service's health check route."
  type = string
}

# The name of the service.
# Example: "ProductPrice"
variable "service_name" {
  description = "The name of the service."
  type = string
}

variable "ordered_placement_strategy" {
  description = "Service level strategies used for task placement. List from top to bottom in order of precedence. The maximum number of ordered_placement_strategy blocks is 5."
  type        = list(object({type=string, field=string}))
  default     = [
    {
      type = "spread"
      field = "attribute:ecs.availability-zone"
    },
    {
      type = "spread",
      field = "instanceId"
    }
  ]
}

variable "placement_constraints" {
  description = "Rules that are taken into consideration during task placement."
  type        = list(object({type=string, expression=string}))
  default     = []
}

variable "container_cpu" {
  description = "The amount of CPU to reserve for the task's container instance"
  type        = string
  default     = "null"
}

variable "iam_nonprd_arns" {
  description = "The parameter store paths to give the non prod IAM role access to."
  type        = list(string)
  default     = null
}

variable "iam_prd_arns" {
  description = "The parameter store paths to give the prod IAM role access to."
  type        = list(string)
  default     = null
}

variable "load_balancing_algorithm" {
  description = "The load balancing algorithm to use when routing requests."
  type        = string
  default     = "least_outstanding_requests"
}

variable "health_check_grace_period_seconds" {
  description = "Number of seconds to wait before service scheduler cares that health checks are failing."
  type        = number
  default     = 0
}

variable "health_check_interval" {
  description = "Number of seconds between health checks."
  type        = number
  default     = 30
}

variable "health_check_timeout" {
  description = "Number of seconds before a health check is considered to have failed."
  type        = number
  default     = 5
}

variable "secret_arns" {
  description = "ARNs of secrets that this service should be granted access to."
  type        = list(string)
  default     = null
}

variable "secret_rotation_lambda_roles" {
  description = "The ARNs of the secret rotation lambdas to give KMS key permissions to."
  type        = list(string)
  default     = null
}

variable "tags" {
  description = "A list of tags to apply to the resources. Only meant to be used in cases where utilizing default tags is not an option. (i.e. old ECS services)"
  type        = map(string)
  default     = {}
}
