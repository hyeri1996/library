package com.greenart.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LibraryInfoController {
    @GetMapping("/library")
    public String getMain() {
        
        return "/libraryinfo/library";
    }
}
