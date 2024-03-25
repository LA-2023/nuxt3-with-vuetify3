# Author: Luis Hernandez
# Pull the base image
FROM node:21.7-alpine3.19

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY ./package*.json /app/

RUN yarn install && yarn cache clean --mirror

COPY . .

ENV PATH ./node_modules/.bin/:$PATH
