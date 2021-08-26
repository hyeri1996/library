package com.greenart.vo;

import lombok.Data;

@Data
public class RecommendBookInfoVO {
    private String seq;
    private String id;
    private String itempair;
    private String item1;
    private String item2;
    private String count;
    private String prob;
    private String rscore;
    private String input_day;
}
