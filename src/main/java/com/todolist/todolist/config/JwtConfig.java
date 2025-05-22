package com.todolist.todolist.config;

import com.todolist.todolist.security.JwtAuth;
import com.todolist.todolist.service.UserService;
import com.todolist.todolist.util.JwtUtil;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JwtConfig {
    @Bean
    public JwtAuth jwtAuthFilter(UserService userService, JwtUtil jwtUtil) {
        return new JwtAuth(jwtUtil, userService);
    }
}