package com.greenart.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BookDetailController {
    @GetMapping("/book")
    public String getBookDetail() {
        return "/book/book";
    }
}
