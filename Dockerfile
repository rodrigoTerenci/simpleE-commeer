# estágio de compilação
FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@7.20.0
COPY . .
RUN npm install
CMD [ "npm","start" ]
EXPOSE 5000