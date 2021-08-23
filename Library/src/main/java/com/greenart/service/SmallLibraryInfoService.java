package com.greenart.service;

import java.util.List;

import com.greenart.mapper.SmallLibraryInfoMapper;
import com.greenart.vo.SmallLibraryInfoVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SmallLibraryInfoService {
    @Autowired
    SmallLibraryInfoMapper mapper;
    
    public List<SmallLibraryInfoVO> selectSmallLibraryKey() {
        return mapper.selectSmallLibraryKey();
    }
    public List<SmallLibraryInfoVO> selectSmallLibraryTitle(String title) {
        return mapper.selectSmallLibraryTitle(title);
    }
}
