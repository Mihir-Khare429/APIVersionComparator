FROM node:18-alpine

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json /usr/app

COPY index.js /usr/app

RUN npm ci

COPY ./src /usr/app

EXPOSE 80

CMD [ "node index.js" ]
