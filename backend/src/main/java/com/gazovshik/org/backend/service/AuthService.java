package com.gazovshik.org.backend.service;

import com.gazovshik.org.backend.dto.AuthRequest;
import com.gazovshik.org.backend.dto.AuthResponse;
import com.gazovshik.org.backend.model.User;
import com.gazovshik.org.backend.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtUtil jwtUtil;

    public AuthResponse authenticate(AuthRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

            final UserDetails userDetails = userService.loadUserByUsername(request.getUsername());
            final String token = jwtUtil.generateToken(userDetails);
            final User user = userService.findByUsername(userDetails.getUsername());

            return new AuthResponse(token, user.getUsername(), user.getRole(), jwtUtil.getRemainingExpirationTime(token));
        } catch (AuthenticationException e) {
            log.warn("Authentication failed for user: {}", request.getUsername());
            throw new RuntimeException("Invalid username or password", e);
        }
    }

    public AuthResponse getAuthResponse(String username) {
        final User user = userService.findByUsername(username);
        final String token = jwtUtil.generateToken(user);
        return new AuthResponse(token, user.getUsername(), user.getRole(), jwtUtil.getRemainingExpirationTime(token));
    }
}