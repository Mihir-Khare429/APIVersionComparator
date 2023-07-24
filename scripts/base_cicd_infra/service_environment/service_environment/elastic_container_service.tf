locals {
  ec2_ecs_container_definitions = <<EOT
  [
    {
      "name": "${lower(var.service_name)}-${lower(var.service_environment)}-service",
      "image": "${aws_ecr_repository.ecr_repository.repository_url}:${var.container_version}",
      "memory": ${var.container_memory},
      "cpu": ${var.container_cpu},
      "essential": true,
      "environment": ${jsonencode(var.container_variables)},
      "portMappings": [
        {
          "containerPort": ${var.container_port},
          "hostPort": 0,
          "protocol": "tcp"
        }
      ],
      "logConfiguration": {
          "logDriver": "awslogs",
          "options": {
              "awslogs-group": "/ecs/${lower(var.service_name)}-${lower(var.service_environment)}-service",
              "awslogs-region": "eu-west-1",
              "awslogs-stream-prefix": "ecs"
          }
      }
    }
  ]
  EOT
}

locals {
  fargate_ecs_container_definitions = <<EOT
  [
    {
      "name": "${lower(var.service_name)}-${lower(var.service_environment)}-service",
      "image": "${aws_ecr_repository.ecr_repository.repository_url}:${var.container_version}",
      "memory": ${var.container_memory},
      "essential": true,
      "environment": ${jsonencode(var.container_variables)},
      "portMappings": [
        {
          "containerPort": ${var.container_port},
          "hostPort": ${var.container_port},
          "protocol": "tcp"
        }
      ]
    }
  ]
  EOT
}

data "aws_ecs_cluster" "ecs_cluster" {
  cluster_name = var.service_cluster
}

data "aws_iam_role" "ecs_task_execution_role" {
  name = "ecsTaskExecutionRole"
}

resource "aws_ecs_task_definition" "task_definition" {
  #ts:skip=AWS.EcsCluster.NetworkSecurity.High.0104
  container_definitions    = var.launch_type == "FARGATE" ? local.fargate_ecs_container_definitions : local.ec2_ecs_container_definitions
  family                   = "${lower(var.service_name)}-${lower(var.service_environment)}-service"
  requires_compatibilities = [var.launch_type]
  task_role_arn            = aws_iam_role.iam_role.arn

  execution_role_arn = var.launch_type == "FARGATE" ? data.aws_iam_role.ecs_task_execution_role.arn : null

  cpu    = var.launch_type == "FARGATE" ? var.container_cpu : null
  memory = var.launch_type == "FARGATE" ? var.container_memory : null

  # Linux deployment defaults network mode to "bridge"
  network_mode = var.launch_type == "FARGATE" ? "awsvpc" : "bridge"

  dynamic "ephemeral_storage" {
    for_each = [
    for t in [var.launch_type] : t
    if t == "FARGATE"
    ]

    content {
      size_in_gib = var.ephemeral_storage_in_gib
    }
  }

  lifecycle {
    create_before_destroy = true
  }

  tags = var.tags
}

resource "aws_ecs_service" "service" {
  cluster = data.aws_ecs_cluster.ecs_cluster.arn
  name    = "${lower(var.service_name)}-${lower(var.service_environment)}-service"

  launch_type         = var.launch_type
  desired_count       = var.service_count
  task_definition     = aws_ecs_task_definition.task_definition.arn
  scheduling_strategy = "REPLICA"
  platform_version    = var.launch_type == "FARGATE" ? var.platform_version : null

  deployment_maximum_percent         = var.deployment_maximum_percent
  deployment_minimum_healthy_percent = var.deployment_minimum_healthy_percent
  health_check_grace_period_seconds  = var.health_check_grace_period_seconds

  lifecycle {
    ignore_changes = [desired_count]
  }

  dynamic "ordered_placement_strategy" {
    for_each = var.ordered_placement_strategy
    content {
      type  = ordered_placement_strategy.value.type
      field = ordered_placement_strategy.value.field
    }
  }

  dynamic "placement_constraints" {
    for_each = var.placement_constraints
    content {
      type       = placement_constraints.value.type
      expression = placement_constraints.value.expression
    }
  }

  // Network configuration is only necessary if we're deploying to Fargate
  dynamic "network_configuration" {
    for_each = [
    for t in [var.launch_type] : t
    if t == "FARGATE"
    ]

    content {
      subnets         = var.subnets
      security_groups = [var.security_group_id]
    }
  }

}

output "task_definition_arn" {
  value = aws_ecs_task_definition.task_definition.arn
}
