package com.todolist.todolist.controller;

import com.todolist.todolist.Dto.saveTodo;
import com.todolist.todolist.entity.Todo;
import com.todolist.todolist.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/")
    public ResponseEntity<Todo> createTodo(@RequestBody saveTodo input){
        Todo  todo = this.todoService.createTodo(input);
        return ResponseEntity.ok(todo);
    }

    @DeleteMapping("/{Id}")
    public ResponseEntity<String> deleteTodo(@PathVariable Long Id){
        this.todoService.deleteTodo(Id);
        return ResponseEntity.ok("Delete Success");
    }

    @PutMapping("/{Id}")
    public ResponseEntity<String> editTodo(@RequestBody saveTodo input, @PathVariable Long Id){
        this.todoService.editTodo(input, Id);
        return ResponseEntity.ok("Update Success");
    }

}
