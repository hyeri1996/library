package com.greenart.mapper;

import java.util.List;

import com.greenart.vo.RecommendBookInfoVO;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RecommendBookInfoMapper {
    public List<RecommendBookInfoVO> selectRecommendCount();
}
