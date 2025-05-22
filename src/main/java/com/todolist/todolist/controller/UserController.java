package com.todolist.todolist.controller;

import com.todolist.todolist.Dto.authResponse;
import com.todolist.todolist.Dto.loginUser;
import com.todolist.todolist.Dto.registerUser;
import com.todolist.todolist.Dto.saveTodo;
import com.todolist.todolist.entity.Todo;
import com.todolist.todolist.entity.User;
import com.todolist.todolist.service.TodoService;
import com.todolist.todolist.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    UserController(UserService userService){
        this.userService = userService;
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

}
