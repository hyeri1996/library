package com.greenart.service;

import java.util.List;

import com.greenart.mapper.NewBookInfoMapper;
import com.greenart.vo.NewBookInfoVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NewBookInfoService {
    @Autowired
    NewBookInfoMapper mapper;
    public List<NewBookInfoVO> selectNewBookDate() {
        return mapper.selectNewBookDate();
    }
    public List<NewBookInfoVO> selectNewBookTitle(String book_title) {
        return mapper.selectNewBookTitle(book_title);
    }
    public List<NewBookInfoVO> selectNewBookInfo() {
        return mapper.selectNewBookInfo();
    }
    public List<NewBookInfoVO> PublicBookCntRank() {
        return mapper.PublicBookCntRank();
    }
    
}
