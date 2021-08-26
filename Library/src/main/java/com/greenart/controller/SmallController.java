package com.greenart.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SmallController {
    @GetMapping("/small")
    public String getMain() {
        
        return "/small/small";
    }
}
