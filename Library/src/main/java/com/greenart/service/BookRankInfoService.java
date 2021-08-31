package com.greenart.service;

import java.util.List;

import com.greenart.mapper.BookRankInfoMapper;
import com.greenart.vo.BookRankInfoVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookRankInfoService {
    @Autowired
    BookRankInfoMapper mapper;

    // 공공도서관 베스트셀러
    public List<BookRankInfoVO> selectPublicBookRank() {
        return mapper.selectPublicBookRank();
    }

    // 작은도서관 베스트셀러
    public List<BookRankInfoVO> selectSmallBookRank() {
        return mapper.selectSmallBookRank();
    }
    
}
