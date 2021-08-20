package com.greenart.vo;

import java.util.Date;

import lombok.Data;

@Data
public class PublicLibraryVO {
    private String rec_key;
    private String author;
    private String vol;
    private String publish_year;
    private String book_code;
    private String title;
    private String lib_code;
    private String isbn13;
    private String reg_no;
    private String acq_code;
    private Date reg_date;
    private String exist_vol;
    private String separate_shelf_code;
}
