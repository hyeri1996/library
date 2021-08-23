package com.greenart.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
<<<<<<< HEAD
    @GetMapping("/")
    public String getMain() {
        return "/index";
    }
}

=======

    @GetMapping("/")
    public String getMain() {
        
        return "/includes/menu";
    }
}
>>>>>>> develop
