FROM node:15

WORKDIR /frontend
COPY . ./

# Нужно делать yarn build и раздать статику через nginx из папки public

EXPOSE 3000