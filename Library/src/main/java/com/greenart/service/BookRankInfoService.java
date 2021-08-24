package com.greenart.service;

import java.util.List;

import com.greenart.mapper.BookRankInfoMapper;
import com.greenart.vo.BookRankInfoVO;
import com.greenart.vo.NewBookInfoVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookRankInfoService {
    @Autowired
    BookRankInfoMapper mapper;
    public List<BookRankInfoVO> NewPublicLank() {
        return mapper.NewPublicLank();
    }
    public List<BookRankInfoVO> NewSmallLank() {
        return mapper.NewSmallLank();
    }
    
}
