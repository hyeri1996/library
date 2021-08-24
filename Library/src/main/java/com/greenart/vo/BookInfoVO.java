package com.greenart.vo;

import lombok.Data;

@Data
public class BookInfoVO {
    private String master_seq;
    private String isbn13;
    private String vol;
    private String title;
    private String author;
    private String publisher;
    private String pub_date;
    private String img_url;
    private String description;
}
