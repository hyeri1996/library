package com.greenart.service;

import java.util.List;

import com.greenart.mapper.BookDetailMapper;
import com.greenart.vo.BookDetailVO;
import com.greenart.vo.BookRankVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class BookDetailInfoService {
    @Autowired
    BookDetailMapper mapper;
    public List<BookDetailVO> selectBookDetail(String keyword, Integer offset){
        return mapper.selectBookDetail(keyword,offset);
    }
    // public List<BookDetailVO> selectBookDetailByTitle(String title, Integer offset) {
    //     return mapper.selectBookDetailByTitle(title,offset);
    // }

    public List<BookRankVO> selectBookRankChange(String reg_dt) {
        return mapper.selectBookRankChange(reg_dt);
    }

    public Integer selectBookDetailCnt(String keyword) {
        return mapper.selectBookDetailCnt(keyword);
    }
}
