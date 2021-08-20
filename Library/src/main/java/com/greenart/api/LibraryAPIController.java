package com.greenart.api;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import com.greenart.vo.BookInfoVO;
import com.greenart.vo.LibraryInfoVO;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LibraryAPIController {
    @GetMapping("/api/library")
    public Map<String, Object> getLirbraryInfo() {
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();

        
        

        return resultMap;
    }
}
