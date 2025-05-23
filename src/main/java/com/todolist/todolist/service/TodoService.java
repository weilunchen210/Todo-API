package com.todolist.todolist.service;

import com.todolist.todolist.Dto.taskRequest;
import com.todolist.todolist.Dto.saveTodo;
import com.todolist.todolist.entity.Todo;
import com.todolist.todolist.entity.User;
import com.todolist.todolist.entity.status;
import com.todolist.todolist.repository.TodoRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;
    private final UserService userService;

    public Todo getTodoById(Long id){
        return todoRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Todo not found with id: " + id));
    }

    public Todo createTodo(saveTodo input){
        User user = userService.getUserById(input.getUserId());

        Todo todo = new Todo();
        todo.setTask(input.getTask());
        todo.setUser(user);
        todo.setCreatedDate(LocalDateTime.now());
        todo.setStatus(status.IN_PROGRESS);
        return todoRepository.save(todo);
    }

    public void deleteTodo(Long id){
        Todo todo = getTodoById(id);
        todoRepository.delete(todo);
    }

    public void editTodo(String task, Long id){
        Todo todo = getTodoById(id);
        todo.setTask(task);
        todoRepository.save(todo);
    }

    public List<Todo> getTodoList(Long userId){
        return todoRepository.findByUserId(userId);
    }
}
