data "aws_iam_role" "iam_role_autoscaling" {
  name = "AWSServiceRoleForApplicationAutoScaling_ECSService"
}

resource "aws_appautoscaling_target" "appautoscaling_target" {
  max_capacity = var.scaling_capacity_max
  min_capacity = var.scaling_capacity_min
  resource_id = "service/${var.service_cluster}/${aws_ecs_service.service.name}"
  role_arn = data.aws_iam_role.iam_role_autoscaling.arn
  scalable_dimension = "ecs:service:DesiredCount"
  service_namespace = "ecs"
}

output "appautoscaling_target_resource_id" {
  value = aws_appautoscaling_target.appautoscaling_target.resource_id
}

output "appautoscaling_target_scalable_dimension" {
  value = aws_appautoscaling_target.appautoscaling_target.scalable_dimension
}

output "appautoscaling_target_service_namespace" {
  value = aws_appautoscaling_target.appautoscaling_target.service_namespace
}