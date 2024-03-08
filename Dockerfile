
FROM node:18.17.1 

WORKDIR /app

RUN npm install -g npm@latest
RUN npm install -g bun