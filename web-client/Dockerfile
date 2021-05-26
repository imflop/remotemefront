FROM node:current-alpine

WORKDIR /frontend

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
COPY . .

RUN yarn workspace web-client install
