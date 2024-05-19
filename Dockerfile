FROM node:21.7.3
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD node index.js