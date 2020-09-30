package com.teobaj.mint_spring_react.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    @GetMapping("/user")
    public String getUser(){
        return "salut"
    }
}
