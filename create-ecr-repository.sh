# AWS ECR上にrepositoryを作る 一回限り
REGION=us-east-1
aws --region ${REGION} ecr create-repository \
    --repository-name ecr-example