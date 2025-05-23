//package com.todolist.todolist.util;
//
//import com.todolist.todolist.entity.User;
//import com.todolist.todolist.repository.UserRepository;
//import lombok.AllArgsConstructor;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Component;
//
//@Component
//@AllArgsConstructor
//public class DataInitializer  implements ApplicationRunner {
//    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;
//
//
//    @Override
//    public void run(ApplicationArguments arg){
//        if(userRepository.findByEmail("test@example.com").isEmpty()){
//            User DummyUser = new User();
//            DummyUser.setUsername("Test User");
//            DummyUser.setEmail("test@example.com");
//            DummyUser.setPassword(passwordEncoder.encode("12345"));
//            DummyUser.setProfilePictureURL("https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
//
//            userRepository.save(DummyUser);
//        }
//    }
//}
