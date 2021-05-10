FROM node:14.4.0-alpine3.10
USER root
WORKDIR /frontend
COPY . /frontend

RUN yarn
RUN yarn workspace gql-server start