# Stage 1: сборка фронтенда
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: сервер для сборенного фронтенда
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve --no-cache
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
