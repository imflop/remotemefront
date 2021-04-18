FROM node:12.18-alpine AS build

ENV NODE_ENV=production
WORKDIR /usr/src/app

RUN npm install -g yarn

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN yarn install

COPY . .

RUN yarn build

# RUN npm install --production --silent && mv node_modules ../
# EXPOSE 3000
# CMD ["npm", "start"]
