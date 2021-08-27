package com.greenart.service;

import java.util.List;

import com.greenart.mapper.LibraryInfoMapper;
import com.greenart.vo.LibraryInfoVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LibraryInfoService {
    @Autowired
    LibraryInfoMapper mapper;
    
    // 도서관 정보
    public List<LibraryInfoVO> selectLibraryInfo() {
        return mapper.selectLibraryInfo();
    }

    // 도서관 명 검색
    public List<LibraryInfoVO> selectLibraryInfoName(String lib_name) {
        return mapper.selectLibraryInfoName(lib_name);
    }

    // 주소 검색
    public List<LibraryInfoVO> selectLibraryAddress(String address1, String address2) {
        return mapper.selectLibraryAddress(address1, address2);
    }

    // 도서관 비율
    public List<LibraryInfoVO> selectLibraryInfoByType(){
        return mapper.selectLibraryInfoByType();
    }
    
    // 작은도서관 정보
    public List<LibraryInfoVO> selectSmallSearch() {
        return mapper.selectSmallSearch();
    }

    // 작은도서관 상세정보
    public List<LibraryInfoVO> selectSmallLibraryInfo() {
        return mapper.selectSmallLibraryInfo();
    }

    // 공공도서관 정보
    public List<LibraryInfoVO> selectPublicSearch() {
        return mapper.selectPublicSearch();
    }

    // 공공도서관 상세정보
    public List<LibraryInfoVO> selectPublicLibraryInfo() {
        return mapper.selectPublicLibraryInfo();
    }

    // 공공도서관 지역 선택
    public List<LibraryInfoVO> selectPublicLibraryAddr(String address1) {
        return mapper.selectPublicLibraryAddr(address1);
    }
}
