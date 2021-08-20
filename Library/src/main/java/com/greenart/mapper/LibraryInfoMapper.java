package com.greenart.mapper;

import java.util.List;

import com.greenart.vo.LibraryInfoVO;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LibraryInfoMapper {
    public List<LibraryInfoVO> selectLibraryInfo();
}
