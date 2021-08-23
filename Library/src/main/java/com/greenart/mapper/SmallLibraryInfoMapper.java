package com.greenart.mapper;

import java.util.List;

import com.greenart.vo.SmallLibraryInfoVO;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SmallLibraryInfoMapper {
    public List<SmallLibraryInfoVO> selectSmallLibraryKey();
    public List<SmallLibraryInfoVO> selectSmallLibraryTitle(String title);
}
