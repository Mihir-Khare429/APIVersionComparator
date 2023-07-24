# ECS Service

Module for spinning up ECS services.

## Semantic Versioning Reminder

We are testing out the use of the semantic-release package (https://semantic-release.gitbook.io/semantic-release/) to automate tagging.
Commit messages must follow the Angular commit message conventions: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines
(If we decide we don't like this, we can configure a different one - this is just the default for the package)

The conventions don't have to be followed exactly - as long as one of the commit messages in your MR is prefixed with `feat(): your message here`, `fix():`, or `BREAKING CHANGE:`, semantic-release should be able to figure it out. Note: you _must_ include a space between the semicolon and the message.

If you squash commits, make sure to update the auto generated commit message in Gitlab to be something that matches the conventions.

## Requirements

There aren't really any. But if you want to run checks on pre-commit, this repo uses https://github.com/antonbabenko/pre-commit-terraform,
which is a collection of git hooks for Terraform that can be run on pre-commit. It is strongly suggested to set this up, as it will automatically do linting,
and also check for security issues and misconfigurations. See sections below for how to do that.

### Install the following packages

1. pre-commit (`pip install pre-commit`)
2. tflint (`choco install tflint` or `curl https://raw.githubusercontent.com/terraform-linters/tflint/master/install_linux.sh | bash`)
3. tfsec (`choco install tfsec`)
4. checkov (`pip install checkov`)

If you're using a Mac, you might also need to install coreutils (https://formulae.brew.sh/formula/coreutils)

An alternative to install all of the above is to run all the pre-commit inside of a docker image, so you don't have to install these things.
However, the docker image won't run as part of the pre-commit hook, so you'd need to remember to manually run it before commit.

### Install the pre-commit hook globally

DIR=~/.git-template
git config --global init.templateDir ${DIR}
pre-commit init-templatedir -t pre-commit ${DIR}

### TODOS

Add Terrascan (https://github.com/accurics/terrascan/releases) to the hooks once the following is resolved: https://github.com/accurics/terrascan/issues/868
