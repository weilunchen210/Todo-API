package com.todolist.todolist.service;

import com.todolist.todolist.Dto.saveTodo;
import com.todolist.todolist.entity.Todo;
import com.todolist.todolist.entity.User;
import com.todolist.todolist.entity.status;
import com.todolist.todolist.repository.TodoRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;

    public Todo getTodoById(Long id){
        return todoRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Todo not found with id: " + id));
    }

    public Todo createTodo(saveTodo input){
        Todo todo = new Todo();
        todo.setDescription(input.getDescription());
        todo.setTitle(input.getTitle());
        todo.setUser(input.getUser());
        todo.setCreatedDate(LocalDateTime.now());
        todo.setStatus(status.IN_PROGRESS);
        return todoRepository.save(todo);
    }

    public void deleteTodo(Long id){
        Todo todo = getTodoById(id);
        todoRepository.delete(todo);
    }

    public void editTodo(saveTodo input, Long id){
        Todo todo = getTodoById(id);
        todo.setDescription(input.getDescription());
        todo.setTitle(input.getTitle());
        todoRepository.save(todo);
    }

    public void completeTask(Long id){
        Todo todo = getTodoById(id);
        todo.setStatus(status.COMPLETED);
        todoRepository.save(todo);
    }

    public List<Todo> getTodoList(Long userId){
        return todoRepository.findByUserId(userId);
    }
}
