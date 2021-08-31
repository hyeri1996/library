package com.greenart.mapper;

import java.util.List;

import com.greenart.vo.BookRankInfoVO;


import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface BookRankInfoMapper {
    public List<BookRankInfoVO> selectPublicBookRank();    //공공도서관 베스트셀러
    public List<BookRankInfoVO> selectSmallBookRank();     // 작은도서관 베스트셀러

    
}
