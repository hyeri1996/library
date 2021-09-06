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

    // 신작도서 목록 (상세)
    public List<NewBookInfoVO> selectNewBookInfo(Integer offset) {
        return mapper.selectNewBookInfo(offset);
    }
    public List<NewBookInfoVO> PublicBookCntRank() {
        return mapper.PublicBookCntRank();
    }

    // 신작도서 목록 
    public List<NewBookInfoVO> selectNewBookList() {
        return mapper.selectNewBookList();
    }
    
    // 신작도서 갯수
    public Integer selectNewBookCnt() {
        return mapper.selectNewBookCnt();
    }
}
