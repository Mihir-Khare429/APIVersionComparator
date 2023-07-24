FROM node:18-alpine

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY . /usr/app

EXPOSE 80

CMD [ "node index.js" ]
