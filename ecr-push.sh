REGION=us-east-1
ACCOUNT_ID=165665469676
IMAGE_NAME=ecr-example
RANDOM_TEXT=`cat /dev/urandom | base64 | fold -w 10 | head -n 1`
aws --region ${REGION} ecr get-login-password | docker login --username AWS --password-stdin ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${IMAGE_NAME}
docker build . -t ${IMAGE_NAME} -t ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${IMAGE_NAME}:${RANDOM_TEXT}
docker push ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${IMAGE_NAME}:${RANDOM_TEXT}