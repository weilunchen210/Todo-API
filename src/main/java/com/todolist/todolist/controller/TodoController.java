package com.todolist.todolist.controller;

import com.todolist.todolist.entity.Todo;
import com.todolist.todolist.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todo")
public class TodoController {
    private final TodoService todoService;

    TodoController(TodoService todoService){
        this.todoService = todoService;
    }

    @GetMapping("/{Id}")
    public ResponseEntity<Todo> getTodo(@PathVariable Long Id){
        Todo  todo = this.todoService.getTodoById(Id);
        return ResponseEntity.ok(todo);
    }

}
