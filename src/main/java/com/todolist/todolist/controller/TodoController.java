package com.todolist.todolist.controller;

import com.todolist.todolist.Dto.saveTodo;
import com.todolist.todolist.entity.Todo;
import com.todolist.todolist.service.TodoService;
import com.todolist.todolist.util.JwtUtil;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
public class TodoController {
    private final TodoService todoService;
    private final JwtUtil jwtUtil;

    TodoController(TodoService todoService, JwtUtil jwtUtil){
        this.todoService = todoService;
        this.jwtUtil = jwtUtil;
    }

    @GetMapping("/{Id}")
    public ResponseEntity<Todo> getTodo(@PathVariable Long Id){
        Todo  todo = this.todoService.getTodoById(Id);
        return ResponseEntity.ok(todo);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Todo>> getTodoList(@RequestHeader("Authorization") String authHeader){
        String authHeaderToken = authHeader.substring(7);
        Long userId = jwtUtil.extractUserId(authHeaderToken);
        List<Todo> todo = this.todoService.getTodoList(userId);
        return ResponseEntity.ok(todo);
    }

    @PostMapping("")
    public ResponseEntity<Todo> createTodo(@RequestHeader("Authorization") String authHeader, @RequestBody String task){
        String authHeaderToken = authHeader.substring(7);
        Long userId = jwtUtil.extractUserId(authHeaderToken);
        saveTodo saveTodo = new saveTodo(task,userId);
        Todo  todo = this.todoService.createTodo(saveTodo);
        return ResponseEntity.ok(todo);
    }

    @DeleteMapping("/{Id}")
    public ResponseEntity<String> deleteTodo(@PathVariable Long Id){
        this.todoService.deleteTodo(Id);
        return ResponseEntity.ok("Delete Success");
    }

    @PutMapping("/{Id}")
    public ResponseEntity<String> editTodo(@RequestBody String task, @PathVariable Long Id){
        this.todoService.editTodo(task, Id);
        return ResponseEntity.ok("Update Success");
    }
}
