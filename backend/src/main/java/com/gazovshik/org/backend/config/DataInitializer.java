package com.gazovshik.org.backend.config;

import com.gazovshik.org.backend.model.User;
import com.gazovshik.org.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Value("${data.initialize.username}")
    private String username;
    @Value("${data.initialize.password}")
    private String password;

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.findByUsername("admin").isEmpty()) {
            User adminUser = new User();
            adminUser.setUsername(username);
            adminUser.setPassword(passwordEncoder.encode(password));
            adminUser.setRole("ADMIN");

            registerNewUser(adminUser);
            System.out.println("Стартовый пользователь успешно создан.");
        }
    }

    public void registerNewUser(User user) {
        if (!userRepository.findByUsername(user.getUsername()).isPresent()) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));

            userRepository.save(user);
        }
    }
}