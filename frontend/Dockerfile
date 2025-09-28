# Dockerfile в frontend/
# Stage 1: Сборка React (Vite)
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build