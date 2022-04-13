FROM node:12.22.12
WORKDIR /root/work
COPY . /root/work
CMD ['node', 'index.js']