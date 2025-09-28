# Stage 1: Сборка приложения React
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Сборка приложения
RUN npm run build

# Stage 2: Сервирование статических файлов через Nginx
FROM nginx:alpine

# Копируем собранные файлы из стадии build
COPY --from=build /app/build /usr/share/nginx/html

# Копируем кастомную конфигурацию nginx (опционально)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Создаем симлинк для роутинга SPA (для React Router)
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]