package com.todolist.todolist.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class User {

    @Id
    private Long id;
    private String username;
    private String email;
    private String password;
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name= "user_id", nullable=false)
//    private User user;
}
