# Imagem de Origem
FROM node:13-alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
# COPY package-lock.json /app/package-lock.json
# COPY yarn.lock /app/yarn.lock


ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Install yarn from the local .tgz
RUN apk add yarn

RUN yarn install --silent
RUN yarn global add react-scripts@3.4.0 --silent

# EXPOSE 3000
# start app
# CMD ["yarn", "start", ".env"]