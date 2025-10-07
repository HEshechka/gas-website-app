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
        if (userRepository.findByUsername(username).isEmpty()) {
            User adminUser = new User();
            adminUser.setUsername(username);
            adminUser.setPassword(passwordEncoder.encode(password));
            adminUser.setRole("ADMIN");
            userRepository.save(adminUser);
            System.out.println("Стартовый пользователь успешно создан.");
        } else {
            updateUserHashPassword();
        }
    }

    private void updateUserHashPassword() {
        userRepository.findByUsername(username)
                .ifPresent(user -> {
                    user.setPassword(passwordEncoder.encode(password));
                    userRepository.save(user);
                });
    }
}
