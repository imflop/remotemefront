FROM node:current-alpine

WORKDIR /frontend

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
COPY . .

RUN yarn workspace gql-server install

