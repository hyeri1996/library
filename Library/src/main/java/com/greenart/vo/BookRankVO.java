package com.greenart.vo;

import lombok.Data;

@Data
public class BookRankVO {
    private String master_no;
    private String change_rank;
    private String reg_rank;
    private String prev_rank;
    private String book_title;
    private String author;
    private String publisher;
    private String pub_date;
    private String isbn13;
    private String reg_dt;
}
