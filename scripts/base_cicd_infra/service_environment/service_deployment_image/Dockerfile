FROM docker:20

# Install utilities needed for building and deploying images
RUN apk update
RUN apk add bash curl git openssh-client python3 py3-pip

# Install the AWS CLI
RUN pip3 install --upgrade pip
RUN pip3 install awscli

# Install Terraform manually
# Version 0.13.X is not provided by APK.
RUN wget https://releases.hashicorp.com/terraform/0.13.6/terraform_0.13.6_linux_amd64.zip
RUN unzip terraform_0.13.6_linux_amd64.zip && rm terraform_0.13.6_linux_amd64.zip
RUN mv terraform /usr/bin/terraform
