package com.greenart.mapper;

import java.util.List;

import com.greenart.vo.NewBookInfoVO;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NewBookInfoMapper {
    public List<NewBookInfoVO> selectNewBookDate();
    public List<NewBookInfoVO> selectNewBookTitle(String book_title);

    public List<NewBookInfoVO> selectNewBookInfo();
}
