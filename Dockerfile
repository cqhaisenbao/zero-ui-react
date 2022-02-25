# Dockerfile

# 基于node镜像
FROM node:16.14.0-alpine3.15 AS builder  

# 镜像创建src目录
WORKDIR /src
# 将项目package.json文件复制到src目录
COPY package*.json /src
RUN yarn
COPY . /src
RUN yarn docs:build

# 还需要一个nginx镜像，用来部署vue项目
FROM nginx
WORKDIR /usr/share/nginx/html/
COPY --from=builder /src/docs-dist .
WORKDIR /etc/nginx/
COPY --from=builder /src/default.conf .