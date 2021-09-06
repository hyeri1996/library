package com.greenart.mapper;

import java.util.List;

import com.greenart.vo.NewBookInfoVO;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NewBookInfoMapper {
    public List<NewBookInfoVO> selectNewBookDate();
    public List<NewBookInfoVO> selectNewBookTitle(String book_title);

    public List<NewBookInfoVO> selectNewBookInfo(Integer offset); // 신작도서목록(상세)
    public List<NewBookInfoVO> PublicBookCntRank();

    public List<NewBookInfoVO> selectNewBookList();     // 신작도서목록
    public Integer selectNewBookCnt(); // 신작도서 갯수

}
