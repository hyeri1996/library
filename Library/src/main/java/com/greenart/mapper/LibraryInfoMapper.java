package com.greenart.mapper;

import java.util.List;

import com.greenart.vo.LibraryInfoVO;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LibraryInfoMapper {    
    public List<LibraryInfoVO> selectLibraryInfo(); // 도서관 정보
    public List<LibraryInfoVO> selectLibraryInfoName(String lib_name);  // 도서관명 검색
    public List<LibraryInfoVO> selectLibraryAddress(String address1, String address2);  // 주소 검색

    // public LibraryInfoVO selectLibraryInfoByType(String lib_type_nm);
    public List<LibraryInfoVO> selectLibraryInfoByType();   // 도서관비율
    
    public List<LibraryInfoVO> selectSmallSearch(); // 작은도서관 정보
    public List<LibraryInfoVO> selectSmallLibraryInfo();    // 작은도서관 상세정보

    public List<LibraryInfoVO> selectPublicSearch();    //공공도서관 정보
    public List<LibraryInfoVO> selectPublicLibraryInfo();   // 공공도서관 상세정보
}
