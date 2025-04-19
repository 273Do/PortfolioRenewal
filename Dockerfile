
# FROM node:18.17.1 

FROM node:latest

WORKDIR /app

RUN npm install -g npm@latest
RUN npm install -g bun