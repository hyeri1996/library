package com.greenart.mapper;

import java.util.List;

import com.greenart.vo.BookDetailVO;

import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface BookDetailMapper {
    public List<BookDetailVO> selectBookDetail();
    public List<BookDetailVO> selectBookDetailByTitle(String title, Integer offset);
}
