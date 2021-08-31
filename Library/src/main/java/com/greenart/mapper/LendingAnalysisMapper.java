package com.greenart.mapper;

import java.util.List;

import com.greenart.vo.LendingAnalysisVO;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LendingAnalysisMapper {
    public List<LendingAnalysisVO> selectLendMonth(String ANALS_TRGET_YEAR);
    public List<LendingAnalysisVO> selectLendDay(String ANALS_TRGET_YEAR, String ANALS_TRGET_MT);
    public List<LendingAnalysisVO> selectLendArea(String ANALS_TRGET_YEAR, String ANALS_TRGET_MT);

    public List<LendingAnalysisVO> selectLendCount();
}
