#Sample Dockerfile for NodeJS Apps

FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /auxnbys7Hhaxb

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]
