package com.spring.register.controller;


import com.spring.register.exception.UserNotFoundException;
import com.spring.register.model.User;
import com.spring.register.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {


    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/allusers")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id).map(user ->{
            user.setUsername(newUser.getUsername());
            user.setFirstname(newUser.getFirstname());
            user.setLastname((newUser.getLastname()));
            user.setEmail(newUser.getEmail());
            user.setPassword(newUser.getPassword());
            user.setPhoneno(newUser.getPhoneno());
            user.setAddress(newUser.getAddress());
            user.setRole(newUser.getRole());
            return userRepository.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));

    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been deleted successfully";
    }

}
