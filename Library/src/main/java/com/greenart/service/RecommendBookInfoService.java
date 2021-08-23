package com.greenart.service;

import java.util.List;

import com.greenart.mapper.RecommendBookInfoMapper;
import com.greenart.vo.RecommendBookInfoVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecommendBookInfoService {
    @Autowired
    RecommendBookInfoMapper mapper;
    public List<RecommendBookInfoVO> selectRecommendCount() {
        return mapper.selectRecommendCount();
    }
}
