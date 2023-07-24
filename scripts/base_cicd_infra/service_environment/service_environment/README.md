# service_environment

## Overview

This Terraform module is for per-environment resource provisioning for services.

Anything that needs to be created on a per-environment basis lives here.

## Requirements

Requirements can vary depending on what the image build hook is configured to do.

You'll most likely require the AWS CLI, Docker, the Dotnet CLI tool, and SH available on PATH.

## Usage

```
module "..." {
  source = "..."
  container_memory = 500
  container_port = 80
  container_variables = [
    { name = "ASPNETCORE_ENVIRONMENT", value = "Staging" },
    { name = "DEPLOYMENT_NAME", value = "stg" },
    { name = "NEW_RELIC_LICENSE_KEY", value = "dummy key" },
    { name = "NEW_RELIC_APP_NAME", value = "new_relic_application_name" },
  ]
  container_version = "setup"

  load_balancer_name = "ecs-cluster-alb-nonprod"
  load_balancer_port = 443
  load_balancer_vpc = "vpc-145b8770"

  on_image_deploy = "sh ./deploy-image.sh"

  scaling_capacity_max = 4
  scaling_capacity_min = 2

  service_cluster = "ecs-service-cluster-nonprod"
  service_count = 2
  deployment_maximum_percent = 200
  deployment_minimum_healthy_percent = 50
  service_domains = [
    { name = "priceconfiguration.financialflows.cimpress.io", zone_id = "Z1YKTWUGMTR0PH" },
    { name = "priceconfiguration.ff.cimpress.io", zone_id = "Z5M8OXLBI47W9" }
  ]
  service_environment = "nonprd"
  service_healthcheck = "/healthcheck"
  service_name = "PriceConfiguration"

  ordered_placement_strategy = [
    {
      type = "spread"
      field = "attribute:ecs.availability-zone"
    },
    {
      type = "binpack",
      field = "memory"
    }
  ]

  secret_arns = [
    "arn:aws:secretsmanager:eu-west-1:710170054012:secret:/services/stg/priceconfiguration/DatabaseCredentials",
    "arn:aws:secretsmanager:eu-west-1:710170054012:secret:/services/stg/priceconfiguration/SomeOtherDatabaseCredentials",
    "arn:aws:secretsmanager:eu-west-1:710170054012:secret:/services/stg/priceconfiguration/Auth0Credentials"
  ]

  secret_rotation_lambda_roles = [
    "arn:aws:iam::710170054012:role/DatabaseCredentialRotationLambdaRole",
    "arn:aws:iam::710170054012:role/Auth0SecretRotationLambdaRole"
  ]
}
```

## Argument Reference

| Name                               | Type   | Default                                                                                            | Description                                                                              |
| ---------------------------------- | ------ | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| container_memory                   | number | `500`                                                                                              | How much memory is allocated to the service.                                             |
| container_port                     | number |                                                                                                    | The port to run the service on.                                                          |
| container_variables                | list   |                                                                                                    | The list of environment variables to run the container with.                             |
| container_version                  | string |                                                                                                    | The version of the container to deploy.                                                  |
| load_balancer_name                 | string |                                                                                                    | The name of the load balancer to attach the service to.                                  |
| load_balancer_port                 | number | `443`                                                                                              | The port of the load balance listener to attach the service to.                          |
| load_balancer_vpc                  | string | `"vpc-145b8770"`                                                                                   | The VPC to run the service on.                                                           |
| on_image_deploy                    | string | `""`                                                                                               | The script to run to deploy the container image.                                         |
| scaling_capacity_max               | number |                                                                                                    | The maximum capacity for scaling.                                                        |
| scaling_capacity_min               | number | 2                                                                                                  | The minimum capacity for scaling.                                                        |
| service_cluster                    | string |                                                                                                    | The name of the cluster to host the service on.                                          |
| service_count                      | number | `2`                                                                                                | The desired number of services to be running.                                            |
| deployment_maximum_percent         | number | `200`                                                                                              | The maximum percentage of the desired task count that can be running.                    |
| deployment_minimum_healthy_percent | number | `50`                                                                                               | The minimum healthy percentage of the desired count to keep running.                     |
| service_domains                    | list   |                                                                                                    | The list of domains to use for the service.                                              |
| service_environment                | string |                                                                                                    | The environment to run the service in.                                                   |
| service_healthcheck                | string |                                                                                                    | The path to the service's health check route.                                            |
| service_name                       | string |                                                                                                    | The name of the service.                                                                 |
| ordered_placement_strategy         | list   |                                                                                                    |                                                                                          | Service level strategies used for task placement.                  |
| placement_constraints              | list   |                                                                                                    |                                                                                          | Rules that are taken into consideration during task placement.     |
| container_cpu                      | string | null                                                                                               | The amount of CPU to reserve for the task's container instance.                          |
| iam_nonprd_arns                    | list   |                                                                                                    |                                                                                          | The parameter store paths to give the non prod IAM role access to. |
| iam_prd_arns                       | list   |                                                                                                    |                                                                                          | The parameter store paths to give the prod IAM role access to.     |
| load_balancing_algorithm           | string |                                                                                                    | `least_outstanding_requests`                                                             | The load balancing algorithm to use when routing requests.         |
| health_check_grace_period_seconds  | number | 0                                                                                                  | Number of seconds to wait before service scheduler cares that health checks are failing. |
| health_check_interval              | number | `30`                                                                                               | Number of seconds between health checks.                                                 |
| health_check_timeout               | number | `5`                                                                                                | Number of seconds before a health check is considered to have failed.                    |
| secret_arns                        | list   | The list of secret ARNs to give the service IAM role permissions to read.                          |
| secret_rotation_lambda_roles       | list   | The list of IAM roles belonging to lambdas that need access to the KMS key encrypting the secrets. |

## Hooks

- `on_image_deploy`
  - Called after the ECR repository has been provisioned. Use this to upload the initial image to ECR.
  - Provides the following environmnt variables:
    - `REMOTE_IMAGE_TAG`: The tag that the Docker image should be given when uploaded to ECR.

## Steps Included

- Amazon Application Load Balancer
  - Create a target group for the service environment
  - Create and attach a listener rule for the service environment to the load balancer
- Amazon Elastic Container Registry
  - Create a container registry
  - Build and upload the first image
  - Set up a lifecycle policy to auto-expire images
- Amazon Elastic Container Service
  - Create the task definition for the service
  - Create the service
  - Configure autoscaling for the service
- Amazon Identity and Access Management
  - Create the task profile for the service
  - Attach policies to the task profile
- Amazon Key Management Service
  - Create a KMS key for the service
  - Create an alias for the KMS key
- Amazon Route 53
  - Create the primary alias for the service
  - Create CNAMEs for the other aliases

## Deviations From Documentation

- Creates an ECR repository per environment rather than per service.
- Sets a lifecycle policy on the ECR repository.
- Creates an ECS task definition per environment rather than per service.
- Configures autoscaling.
- Changes some naming conventions.
