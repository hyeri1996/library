package com.greenart.vo;

import lombok.Data;

@Data
public class BookRankInfoVO {
    private Integer no;
    private Integer rank;
    private String input_date;
    private String isbn13;
    private String title;
    private String author;
    private String description;
    private String publisher;
    private String pub_date;
    private String img_url;
    private Integer loan_cnt;
    private String vol;
    private Integer target_total;

    
}
