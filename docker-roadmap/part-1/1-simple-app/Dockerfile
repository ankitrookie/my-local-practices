FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

// this command below is run when we start the container, meaning when running the image

CMD ["node", "index.js"]



