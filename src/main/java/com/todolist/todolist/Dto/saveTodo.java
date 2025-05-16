package com.todolist.todolist.Dto;

import com.todolist.todolist.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class saveTodo {
    private String title;
    private String description;
    private User user;
}
