package com.todolist.todolist.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Todo {

    @Id
    private Long id;
    private String title;
    private String description;
    private LocalDate createdDate;
}
