package com.greenart.vo;

import lombok.Data;

@Data
public class LibraryInfoVO {
    private Integer seq;
    private Integer lib_code;
    private String lib_name;
    private String addr;
    private String address1;
    private String address2;
    private String tel;
    private String homepage;
    private String operatingTime;
    private String closedOn;
}
