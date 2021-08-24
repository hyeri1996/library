package com.greenart.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.greenart.mapper.LendingAnalysisMapper;
import com.greenart.vo.LendingAnalysisVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LendingAnalysisService {
    @Autowired
    LendingAnalysisMapper mapper;
    public List<LendingAnalysisVO> selectLendMonth(String ANALS_TRGET_YEAR) {
        return mapper.selectLendMonth(ANALS_TRGET_YEAR);
    }
    public List<LendingAnalysisVO> selectLendDay(String ANALS_TRGET_YEAR, String ANALS_TRGET_MT) {
        return mapper.selectLendDay(ANALS_TRGET_YEAR, ANALS_TRGET_MT);
    }
    public List<LendingAnalysisVO> selectLendArea(String ANALS_TRGET_YEAR, String ANALS_TRGET_MT) {
        return mapper.selectLendArea(ANALS_TRGET_YEAR, ANALS_TRGET_MT);
    }
}
