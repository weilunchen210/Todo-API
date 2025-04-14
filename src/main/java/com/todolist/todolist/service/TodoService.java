package com.todolist.todolist.service;

import com.todolist.todolist.entity.Todo;
import com.todolist.todolist.repository.TodoRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;

    public Todo getTodoById(Long id){
        return todoRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Todo not found with id: " + id));
    }
}
