package com.gazovshik.org.backend.dto;

import lombok.Data;

@Data
public class AuthResponse {
    private String token;
    private String tokenType = "Bearer";
    private String username;
    private String role;
    private Long expiresIn;

    public AuthResponse(String token, String username, String role, Long expiresIn) {
        this.token = token;
        this.username = username;
        this.role = role;
        this.expiresIn = expiresIn;
    }
}
