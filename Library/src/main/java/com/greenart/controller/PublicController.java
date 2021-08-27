package com.greenart.controller;

import java.util.List;

import com.greenart.service.LibraryInfoService;
import com.greenart.vo.LibraryInfoVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PublicController {
    @Autowired
    LibraryInfoService lib_service;

    @GetMapping("/public")
    public String getMain(Model model) {
        List<LibraryInfoVO> liblist = lib_service.selectLibraryInfo();
        
        model.addAttribute("liblist", liblist);
        return "/public/public";
    }
}
