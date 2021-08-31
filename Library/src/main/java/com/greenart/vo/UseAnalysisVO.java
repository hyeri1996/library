package com.greenart.vo;

import lombok.Data;

@Data
public class UseAnalysisVO {
    private Integer seq;
    private String control_no;
    private String isbn13;
    private String title;
    private String author;
    private String publisher;
    private String vol;
    private String pub_date;
    private String img_url;
    private Integer loan_count;

    private Integer cnt;
}
