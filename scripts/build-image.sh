#!/bin/bash

cd "$(dirname "${BASH_SOURCE[0]}" )/.."

docker build . \
  --build-arg CT_ARTIFACTORY_USER=$CT_ARTIFACTORY_USER \
  --build-arg CT_ARTIFACTORY_TOKEN=$CT_ARTIFACTORY_TOKEN \
  --file ./Dockerfile \
  --tag ${1:-$CI_COMMIT_SHORT_SHA}
