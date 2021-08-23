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
    public List<LibraryInfoVO> selectLibraryInfoAddr() {
        return mapper.selectLibraryInfoAddr();
    }
    public List<LibraryInfoVO> selectLibraryInfoName(String lib_name) {
        return mapper.selectLibraryInfoName(lib_name);
    }
    public List<LibraryInfoVO> selectLibraryAddress(String address1, String address2) {
        return mapper.selectLibraryAddress(address1, address2);
    }
    public LibraryInfoVO selectLibraryInfoByType(String lib_type_nm) {
        return mapper.selectLibraryInfoByType(lib_type_nm);
    }
}
