FROM node:13-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN apk add yarn

RUN yarn install --silent
RUN yarn global add react-scripts@3.4.0 --silent