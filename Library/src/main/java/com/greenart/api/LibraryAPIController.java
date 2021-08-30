package com.greenart.api;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.greenart.service.LibraryInfoService;
import com.greenart.vo.LibraryInfoVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LibraryAPIController {
    @Autowired
    LibraryInfoService service;

        // 도서관 정보
        @GetMapping("/api/library")
        public Map<String, Object> getLirbraryInfo() {
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
                List<LibraryInfoVO> list = service.selectLibraryInfo();
                resultMap.put("status", true);
                resultMap.put("data", list);
                return resultMap;
            }

            // 도서관 명 검색
        @GetMapping("/api/library/{lib_name}") 
        public Map<String, Object> getLibraryName(@PathVariable String lib_name) {
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
            lib_name = "%"+lib_name+"%"; // 키워드 검색 시 앞 뒤로 %를 붙여주셔야 됩니다.
                List<LibraryInfoVO> list = service.selectLibraryInfoName(lib_name);
                resultMap.put("status", true);
                resultMap.put("data", list);
                return resultMap;
            }

            // 주소1, 주소2 검색
        @GetMapping("/api/library/{address1}/{address2}")
        public Map<String, Object> getLibarayAdrress(@PathVariable String address1, @PathVariable String address2) {
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
            address1 = "%"+address1+"%";
            address2 = "%"+address2+"%";
            List<LibraryInfoVO> list = service.selectLibraryAddress(address1, address2);
            resultMap.put("status", true);
            resultMap.put("data", list);
            return resultMap;
            }

            // 도서관 비율
        @GetMapping("/api/library/type")
        public Map<String, Object> getLibraryInfoByType() {
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
            // LibraryInfoVO data = null;
            // lib_type_nm = "%"+lib_type_nm+"%";
            List<LibraryInfoVO> list = service.selectLibraryInfoByType();
            resultMap.put("status", true);
            resultMap.put("type", list);
            return resultMap;
        }

        // 작은도서관 정보 (도서관 명, 도로명 주소)
        @GetMapping("/api/small/info")
        public Map<String, Object> getSmallInfoSearch() {
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
            List<LibraryInfoVO> list = service.selectSmallSearch();
            resultMap.put("status", true);
            resultMap.put("data", list);
            return resultMap;
        }

        // 작은도서관 상세정보 (대표번호, 홈페이지, 개관시간, 휴관일)
        @GetMapping("/api/small/detail")
        public Map<String, Object> getSmallLibraryInfo() {
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
            List<LibraryInfoVO> list = service.selectSmallLibraryInfo();
            resultMap.put("status", true);
            resultMap.put("data", list);
            return resultMap;
        }

        // 공공도서관 정보 (도서관 명, 도로명 주소)
        @GetMapping("/api/public/info")
        public Map<String, Object> getPublicInfoSearch() {
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
            List<LibraryInfoVO> list = service.selectPublicSearch();
            resultMap.put("status", true);
            resultMap.put("data", list);
            return resultMap;
        }
        
        // 공공도서관 상세정보 (대표번호, 홈페이지, 개관시간, 휴관일)
        @GetMapping("/api/public/detail")
        public Map<String, Object> getPublicLibraryInfo() {
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
            List<LibraryInfoVO> list = service.selectPublicLibraryInfo();
            resultMap.put("status", true);
            resultMap.put("data", list);
            return resultMap;
        }

        // 공공도서관 지역선택
        @GetMapping("/api/public/address")
        public Map<String, Object> getPublicLibraryAddr(
            @RequestParam String address1
        ){
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
            List<LibraryInfoVO> list = service.selectPublicLibraryAddr(address1+"%");
            resultMap.put("status", true);
            resultMap.put("data", list);
            return resultMap;
        }

        // 작은도서관 지역선택
        @GetMapping("/api/small/address")
        public Map<String, Object> getSmallLibraryAddr(
            @RequestParam String address1
        ){
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
            List<LibraryInfoVO> list = service.selectSmallLibraryAddr(address1+"%");
            resultMap.put("status", true);
            resultMap.put("data", list);
            return resultMap;
        }
    }
