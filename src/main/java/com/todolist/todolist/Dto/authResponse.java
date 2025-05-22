package com.todolist.todolist.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class authResponse {
    private String token;
    private Long userId;
    private String username;
    private String email;
}
