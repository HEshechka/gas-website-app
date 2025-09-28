package com.gazovshik.org.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.beans.factory.annotation.Value;

@Configuration // Указывает, что это класс конфигурации Spring
public class WebConfig implements WebMvcConfigurer {

    @Value("${file.upload-dir}") // Инжектируем путь из application.properties
    private String uploadDir;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/images/**") // Все запросы, начинающиеся с /images/ (например, /images/my-photo.jpg)
                .addResourceLocations("file:" + uploadDir + "/"); // Будут сопоставлены с файлами в вашей папке загрузки (например, uploads/my-photo.jpg)
    }
}