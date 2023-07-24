#!/bin/bash

TAG=registry.gitlab.com/cimpress-technology/ff/infrastructure.ci.cd/modules/ecs-service:1.3.0
echo $ACCESS_TOKEN | docker login registry.gitlab.com -u devfinancialflows --password-stdin
docker build . -t $TAG
docker push $TAG
