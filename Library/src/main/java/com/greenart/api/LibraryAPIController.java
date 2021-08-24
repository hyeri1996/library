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
    @GetMapping("/api/library")
        public Map<String, Object> getLirbraryInfo() {
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
                List<LibraryInfoVO> list = service.selectLibraryInfoAddr();
                resultMap.put("status", true);
                resultMap.put("data", list);
                return resultMap;
            }
        @GetMapping("/api/library/{lib_name}") 
        public Map<String, Object> getLibraryName(@PathVariable String lib_name) {
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
            lib_name = "%"+lib_name+"%"; // 키워드 검색 시 앞 뒤로 %를 붙여주셔야 됩니다.
                List<LibraryInfoVO> list = service.selectLibraryInfoName(lib_name);
                resultMap.put("status", true);
                resultMap.put("data", list);
                return resultMap;
            }
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
        @GetMapping("/api/library/type/{lib_type_nm}")
        public Map<String, Object> getLibraryInfoByType(@PathVariable String lib_type_nm) {
            Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
            LibraryInfoVO data = null;
            lib_type_nm = "%"+lib_type_nm+"%";
            resultMap.put("status", true);
            resultMap.put("data", data);
            return resultMap;
        }
}
