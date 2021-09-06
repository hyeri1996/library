package com.greenart.api;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.greenart.service.NewBookInfoService;
import com.greenart.vo.NewBookInfoVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    // @GetMapping("/api/newbook/{book_title}")
    // public Map<String, Object> getNewBookTitle(@PathVariable String book_title) {
    //     Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
    //     book_title = "%"+book_title+"%";
    //     List<NewBookInfoVO> list = service.selectNewBookTitle(book_title);
    //     resultMap.put("status", true);
    //     resultMap.put("data", list);
    //     return resultMap;
    // }

    // 신작도서 목록 상세 (도서명, 저자, 도서소개, 출판사, 발행일)
    @GetMapping("/api/newbook/info")
    public Map<String, Object> getNewBookInfo(
        @RequestParam @Nullable Integer offset
    ) {
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<NewBookInfoVO> list = service.selectNewBookInfo(offset);
        resultMap.put("status", true);
        resultMap.put("data", list);
        return resultMap;
    }

    // 신작도서 목록 (도서명, 저자, 출판사)
    @GetMapping("/api/newbook/list")
    public Map<String, Object> getNewBookList() {
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<NewBookInfoVO> list = service.selectNewBookList();
        resultMap.put("status", true);
        resultMap.put("data", list);
        return resultMap;
    }
    

    @GetMapping("/api/newbook/public/cnt")
    public Map<String, Object> getNewPublicCntLank() {
        System.out.println("start");
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<NewBookInfoVO> list = service.PublicBookCntRank();
        resultMap.put("status", true);
        resultMap.put("data", list);
        System.out.println("end");
        return resultMap;
    }

    @GetMapping("/api/newbook/cnt")
    public Integer getNewBookCnt() {
        return service.selectNewBookCnt();
    }
}
