package com.greenart.mapper;

import java.util.List;

import com.greenart.vo.BookRankInfoVO;
import com.greenart.vo.NewBookInfoVO;

import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface BookRankInfoMapper {
    public List<BookRankInfoVO> NewPublicLank();
    public List<BookRankInfoVO> NewSmallLank();

    
}
