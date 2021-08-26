package com.greenart.api;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.greenart.service.BookRankInfoService;
import com.greenart.vo.BookRankInfoVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookRankInfoAPIController {
    @Autowired
    BookRankInfoService service;
    @GetMapping("/api/bookrank/public")
    public Map<String, Object> getNewPublicLank() {
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<BookRankInfoVO> list = service.NewPublicLank();
        resultMap.put("status", true);
        resultMap.put("data", list);
        return resultMap;
    }
    @GetMapping("/api/bookrank/small")
    public Map<String, Object> getNewSamllLank() {
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<BookRankInfoVO> list = service.NewSmallLank();
        resultMap.put("status", true);
        resultMap.put("data", list);
        return resultMap;
    }
    
}
