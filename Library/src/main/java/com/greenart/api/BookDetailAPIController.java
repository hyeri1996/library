package com.greenart.api;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.greenart.service.BookDetailInfoService;
import com.greenart.vo.BookDetailVO;
import com.greenart.vo.BookRankVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class BookDetailAPIController {
    @Autowired
    BookDetailInfoService service;
    // 책정보 입력 X
    @GetMapping("/api/book") 
        public Map<String, Object> getBookDetailInfo() {
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
                List<BookDetailVO> list = service.selectBookDetail();
                resultMap.put("status", true);
                resultMap.put("data", list);
                return resultMap;
            }
        // 책정보 제목 키워드 입력
        @GetMapping("/api/book/{title}") 
            public Map<String, Object> getBookDetailInfoByTitle(
                @PathVariable String title,@RequestParam Integer offset
                ) {
                Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
                title = "%"+title+"%"; // 키워드 검색 시 앞 뒤로 %를 붙여주셔야 됩니다.
                List<BookDetailVO> list = service.selectBookDetailByTitle(title, offset);
                resultMap.put("status", true);
                resultMap.put("data", list);
            return resultMap;
        }

        // 대출 급상승 도서
        @GetMapping("/api/book/rank/{reg_dt}")
            public Map<String, Object> getBookRankChange(
                @PathVariable String reg_dt
            ){
                Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
                List<BookRankVO> list = service.selectBookRankChange(reg_dt);
                resultMap.put("status", true);
                resultMap.put("ranklist", list);
                return resultMap;
            }
}
