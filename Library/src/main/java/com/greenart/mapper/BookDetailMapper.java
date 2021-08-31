package com.greenart.mapper;

import java.util.List;

import com.greenart.vo.BookDetailVO;
import com.greenart.vo.BookRankVO;

import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface BookDetailMapper {
    public List<BookDetailVO> selectBookDetail(String keyword, Integer offset);
    // public List<BookDetailVO> selectBookDetailByTitle(String title, Integer offset);

    public List<BookRankVO> selectBookRankChange(String reg_dt);
    public Integer selectBookDetailCnt(String keyword);
}
