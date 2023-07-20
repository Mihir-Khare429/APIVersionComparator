FROM node:18-alpine

WORKDIR /app

COPY package.json /app/

COPY index.js /app/

RUN npm install

COPY ./src /app/src

EXPOSE 3000

CMD [ "node index.js" ]
