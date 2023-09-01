# Stage 1: Build the Nuxt application
FROM node:14 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Create the production image
FROM node:14 AS production

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY --from=build /app/.nuxt ./.nuxt
COPY --from=build /app/static ./static

EXPOSE 3000

CMD ["npm", "start"]
