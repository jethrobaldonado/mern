FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 8082

ENTRYPOINT [ "nodemon", "dist/index.js" ]