package com.greenart.vo;

import lombok.Data;

@Data
public class BookRankInfoVO {
    private String isbn13;
    private String rank;
    private String title;
    private String author;
}
