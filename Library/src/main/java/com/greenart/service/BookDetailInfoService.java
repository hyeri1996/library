package com.greenart.service;

import java.util.List;

import com.greenart.mapper.BookDetailMapper;
import com.greenart.vo.BookDetailVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class BookDetailInfoService {
    @Autowired
    BookDetailMapper mapper;
    public List<BookDetailVO> selectBookDetail(){
        return mapper.selectBookDetail();
    }
    public List<BookDetailVO> selectBookDetailByTitle(String title, Integer offset) {
        return mapper.selectBookDetailByTitle(title,offset);
    }
}
