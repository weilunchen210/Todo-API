package com.todolist.todolist.controller;

import com.todolist.todolist.Dto.*;
import com.todolist.todolist.entity.Todo;
import com.todolist.todolist.entity.User;
import com.todolist.todolist.service.TodoService;
import com.todolist.todolist.service.UserService;
import com.todolist.todolist.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    private final JwtUtil jwtUtil;

    UserController(UserService userService, JwtUtil jwtUtil){

        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public ResponseEntity<User> getTodo(@RequestBody registerUser input){
        User user = this.userService.register(input);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    public ResponseEntity<authResponse> createTodo(@RequestBody loginUser input){
        authResponse AuthResponse = this.userService.login(input);
        return ResponseEntity.ok(AuthResponse);
    }

    @PutMapping("/edit")
    public ResponseEntity<User> editTodo(@RequestHeader("Authorization") String authHeader, @RequestBody editUser input){
        String authHeaderToken = authHeader.substring(7);
        Long userId = jwtUtil.extractUserId(authHeaderToken);
        User user = this.userService.editUser(input,userId);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/dummyLogin")
    public ResponseEntity<authResponse> createTodo(){
        authResponse AuthResponse = this.userService.dummyLogin();
        return ResponseEntity.ok(AuthResponse);
    }
}
