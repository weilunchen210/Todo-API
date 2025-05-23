package com.todolist.todolist.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class editUser {
    private String username;
    private String email;
    private String password;
    private String profilePictureURL;
}
