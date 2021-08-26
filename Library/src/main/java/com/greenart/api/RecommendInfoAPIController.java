package com.greenart.api;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.greenart.service.RecommendBookInfoService;
import com.greenart.vo.RecommendBookInfoVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecommendInfoAPIController {
    @Autowired
    RecommendBookInfoService service;
    
    @GetMapping("/api/recommend")
    public Map<String, Object> getRecommendBookCount() {
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<RecommendBookInfoVO> list = service.selectRecommendCount();
        resultMap.put("status", true);
        resultMap.put("data", list);
        return resultMap;
    }
    // @GetMapping("/api/recommend/public")
    // public Map<String, Object> getNewPublicLank() {
    //     Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
    //     List<RecommendBookInfoVO> list = service.NewPublicLank();
    //     resultMap.put("status", true);
    //     resultMap.put("data", list);
    //     return resultMap;
    // }
}
