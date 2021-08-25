package com.greenart.mapper;

import java.util.List;

import com.greenart.vo.LibraryInfoVO;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LibraryInfoMapper {
    public List<LibraryInfoVO> selectLibraryInfo();
    public List<LibraryInfoVO> selectLibraryInfoName(String lib_name);
    public List<LibraryInfoVO> selectLibraryAddress(String address1, String address2);

    public LibraryInfoVO selectLibraryInfoByType(String lib_type_nm);
    
    
}
