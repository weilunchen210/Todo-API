package com.todolist.todolist.service;

import com.todolist.todolist.Dto.authResponse;
import com.todolist.todolist.Dto.loginUser;
import com.todolist.todolist.Dto.registerUser;
import com.todolist.todolist.Dto.saveTodo;
import com.todolist.todolist.entity.Todo;
import com.todolist.todolist.entity.User;
import com.todolist.todolist.entity.status;
import com.todolist.todolist.repository.TodoRepository;
import com.todolist.todolist.repository.UserRepository;
import com.todolist.todolist.util.JwtUtil;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public User register(registerUser input){
        User user = new User();
        user.setEmail(input.getEmail());
        user.setPassword(passwordEncoder.encode(input.getPassword()));
        user.setUsername(input.getUsername());
        return userRepository.save(user);
    }

    //dummy to test registration for now
    public authResponse login(loginUser input){
        User user = userRepository.findByEmail(input.getEmail()).orElseThrow(() -> new EntityNotFoundException("Invalid Email: " + input.getEmail()));

        if(!passwordEncoder.matches(input.getPassword(),user.getPassword())){
            throw new BadCredentialsException("Invalid Password");
        }
        String token = jwtUtil.generateToken(user.getUserId());

        return new authResponse(token, user.getId(),user.getUsername(),user.getEmail() );
    }

    public User getUserById(Long UserId){
        User user = userRepository.findById(UserId).orElseThrow(() -> new EntityNotFoundException("Invalid UserId: " + UserId));
        return user;
    }

    public User getUserByEmail(String email){
        User user = userRepository.findByEmail(email).orElseThrow(() -> new EntityNotFoundException("Invalid Email: " + email));
        return user;
    }
}
