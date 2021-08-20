package com.greenart.vo;

import lombok.Data;

@Data
public class NewBookVO {
    private Integer no;
    private String input_date;
    private String isbn10;
    private String isbn13;
    private String book_title;
    private String authors;
    private String description;
    private String publisher;
    private String pub_date;
    private String aladin_img_url;
    private String master_seq;
}
