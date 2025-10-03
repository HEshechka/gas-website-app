# СТАДИЯ 1: Сборка проекта
FROM maven:3.8.5-openjdk-17 AS build

# Установка рабочей директории
WORKDIR /app

# Копируем pom.xml и загружаем зависимости для кэширования
COPY pom.xml .
RUN mvn dependency:go-offline

# Копируем исходники
COPY src ./src

# Сборка проекта без тестов
RUN mvn clean package -DskipTests

# СТАДИЯ 2: Минимальный образ для запуска
FROM openjdk:17-jdk-slim

# Рабочая директория
WORKDIR /app

# Копируем собранный JAR-файл
COPY --from=build /app/target/app.jar /app/app.jar

# Указываем порт приложения
EXPOSE 8080

# Запуск
ENTRYPOINT ["java", "-jar", "app.jar", "--spring.profiles.active=prod"]
