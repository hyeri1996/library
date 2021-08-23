package com.greenart.api;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.greenart.service.SmallLibraryInfoService;
import com.greenart.vo.SmallLibraryInfoVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SmallLibraryInfoAPIController {
    @Autowired
    SmallLibraryInfoService service;

    @GetMapping("/api/small")
    public Map<String, Object> getSmallLibraryKey() {
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<SmallLibraryInfoVO> list = service.selectSmallLibraryKey();
        resultMap.put("status", true);
        resultMap.put("data", list);
        return resultMap;
    }
    @GetMapping("/api/small/{title}")
    public Map<String, Object> getSmallLibraryTitle(@PathVariable String title) {
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        title = "%"+title+"%";
        List<SmallLibraryInfoVO> list = service.selectSmallLibraryTitle(title);
        resultMap.put("status", true);
        resultMap.put("data", list);
        return resultMap;
    }
}
