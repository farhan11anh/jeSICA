# Use the official Node.js image as the base image
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
RUN npm cache clean --force

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
