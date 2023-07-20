#!/bin/bash

cd "$(dirname "${BASH_SOURCE[0]}" )/.."

docker tag ${1:-$CI_COMMIT_SHORT_SHA} ${2:-$REMOTE_IMAGE_TAG}

ACCOUNT_ID=$(aws sts get-caller-identity --output text --query 'Account')

aws ecr get-authorization-token --output text --query 'authorizationData[0].authorizationToken' --region eu-west-1 \
  | base64 -d \
  | cut -d: -f2 \
  | docker login --username AWS --password-stdin https://$ACCOUNT_ID.dkr.ecr.eu-west-1.amazonaws.com

docker push ${2:-$REMOTE_IMAGE_TAG}
