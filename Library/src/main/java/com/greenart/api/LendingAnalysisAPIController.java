package com.greenart.api;

import java.util.Calendar;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.greenart.service.LendingAnalysisService;
import com.greenart.vo.LendingAnalysisVO;
import com.greenart.vo.UseAnalysisVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LendingAnalysisAPIController {
    @Autowired
    LendingAnalysisService service;
    // @GetMapping("/api/lend/{ANALS_TRGET_YEAR}/{ANALS_TRGET_MT}")
    // public Map<String, Object> getLendDay(
    //     @PathVariable String ANALS_TRGET_YEAR, @PathVariable Integer ANALS_TRGET_MT
    //     ) 
     // 월별 대출 비율
    @GetMapping("/api/lend/month")
    public Map<String, Object> getLendMonth(
        @RequestParam @Nullable String ANALS_TRGET_YEAR
        ) 
    {
        String year = "";
         // 아무것도 입력하지 않았을 때
        if(ANALS_TRGET_YEAR == null) {
             // 오늘 날짜를 기준으로 연도와 월을 세팅합니다..
            Calendar c = Calendar.getInstance();
            year = ""+c.get(Calendar.YEAR);
        }
        else {
             // 그게 아니라면, 입력한 값으로 세팅합니다.
            year = ANALS_TRGET_YEAR;
        }

        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<LendingAnalysisVO> list = service.selectLendMonth(year);
            resultMap.put("lendmonth", list);
            return resultMap;
    }
    // 요일별 대출 비율
    @GetMapping("/api/lend/day")
    public Map<String, Object> getLendDay(
        @RequestParam @Nullable String ANALS_TRGET_YEAR, 
        @RequestParam @Nullable Integer ANALS_TRGET_MT
        ) 
    {
        String year = "";
        String month = "";
        // 아무것도 입력하지 않았을 때
        if(ANALS_TRGET_YEAR == null || ANALS_TRGET_MT == null) {
            // 오늘 날짜를 기준으로 연도와 월을 세팅합니다..
            Calendar c = Calendar.getInstance();
            year = ""+c.get(Calendar.YEAR);
            month = c.get(Calendar.MONTH)+1<10?"0"+(c.get(Calendar.MONTH)+1):""+(c.get(Calendar.MONTH)+1);
        }
        else {
            // 그게 아니라면, 입력한 값으로 세팅합니다.
            year = ANALS_TRGET_YEAR;
            month = ANALS_TRGET_MT<10?"0"+ANALS_TRGET_MT:""+ANALS_TRGET_MT;
        }

        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<LendingAnalysisVO> list = service.selectLendDay(year, month);
            resultMap.put("lendDay", list);
            return resultMap;
    }
    // 지역별 대출 비율
    @GetMapping("/api/lend/area")
    public Map<String, Object> getLendArea(
        @RequestParam @Nullable String ANALS_TRGET_YEAR, 
        @RequestParam @Nullable Integer ANALS_TRGET_MT
        ) 
    {
        String year = "";
        String month = "";
        // 아무것도 입력하지 않았을 때
        if(ANALS_TRGET_YEAR == null || ANALS_TRGET_MT == null) {
            // 오늘 날짜를 기준으로 연도와 월을 세팅합니다..
            Calendar c = Calendar.getInstance();
            year = ""+c.get(Calendar.YEAR);
            month = c.get(Calendar.MONTH)+1<10?"0"+(c.get(Calendar.MONTH)+1):""+(c.get(Calendar.MONTH)+1);
        }
        else {
            // 그게 아니라면, 입력한 값으로 세팅합니다.
            year = ANALS_TRGET_YEAR;
            month = ANALS_TRGET_MT<10?"0"+ANALS_TRGET_MT:""+ANALS_TRGET_MT;
        }

        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<LendingAnalysisVO> list = service.selectLendArea(year, month);
            resultMap.put("lendarea", list);
            return resultMap;
    }
    @GetMapping("/api/lend/cnt")
    public Map<String, Object> selectLoanTotalCnt(
        @RequestParam @Nullable Integer offset
    ) {
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        List<UseAnalysisVO> list = service.selectLoanTotalCnt(offset);
        resultMap.put("status", true);
        resultMap.put("data", list);
        return resultMap;
    }
    
}
