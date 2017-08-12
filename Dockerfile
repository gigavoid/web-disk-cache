FROM node:8.3-alpine

WORKDIR /usr/src/web-disk-cache
COPY package.json .
RUN npm install

COPY . .

EXPOSE 8080 
CMD ["node", "index.js"]
