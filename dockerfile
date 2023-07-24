FROM node:18-alpine

WORKDIR /app

COPY . /app

EXPOSE 80

CMD [ "node", "index" ]
