package com.greenart.vo;

import lombok.Data;

@Data
public class NewBookInfoVO {
    private String input_date;
    private String isbn13;
    private String book_title;
    private String authors;
    private String description;
    private String publisher;
    private String pub_date;
}
