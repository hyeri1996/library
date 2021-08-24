package com.greenart.api;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.greenart.service.NewBookInfoService;
import com.greenart.vo.NewBookInfoVO;

import org.apache.ibatis.annotations.ResultMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NewBookAPIController {
    @Autowired
    NewBookInfoService service;
    
    @GetMapping("/api/newbook")
    public Map<String, Object> getNewBookDate() {
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<NewBookInfoVO> list = service.selectNewBookDate();
        resultMap.put("status", true);
        resultMap.put("data", list);
        return resultMap;
    }
    @GetMapping("/api/newbook/{book_title}")
    public Map<String, Object> getNewBookTitle(@PathVariable String book_title) {
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        book_title = "%"+book_title+"%";
        List<NewBookInfoVO> list = service.selectNewBookTitle(book_title);
        resultMap.put("status", true);
        resultMap.put("data", list);
        return resultMap;
    }
    @GetMapping("/api/newbook/info")
    public Map<String, Object> getNewBookInfo() {
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<NewBookInfoVO> list = service.selectNewBookInfo();
        resultMap.put("status", true);
        resultMap.put("data", list);
        return resultMap;
    }
    @GetMapping("/api/newbook/public/cnt")
    public Map<String, Object> getNewPublicCntLank() {
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<NewBookInfoVO> list = service.PublicBookCntRank();
        resultMap.put("status", true);
        resultMap.put("data", list);
        return resultMap;
    }
}
