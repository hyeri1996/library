package com.greenart.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NewBookController {
    @GetMapping("/newbook")
    public String getMain() {
        
        return "/newbook/newbook";
    }
}