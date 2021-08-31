$(function(){
    getBookCount($("#search_keyword").val());
    $.ajax({
        type:"get",
        url:"/api/book/rank/2021-08-25",
        success:function(r) {
            console.log(r);
            $("#changeRank").html(r.ranklist[0].change_rank);
            $("#regRank").html(r.ranklist[0].reg_rank);
            $("#bookTitle").html(r.ranklist[0].book_title);
            $("#author").html(r.ranklist[0].author);
            $("#publisher").html(r.ranklist[0].publisher);
            $(".book_rank").html("");
            for(let i=0; i<r.ranklist.length; i++){
                let tag = 
                '<div class="rank_box">'+
                '<p class="bookTitle">'+r.ranklist[i].book_title+'</p>'+
                '<p class="author">'+r.ranklist[i].author+'</p>'+
                '<p class="publisher">'+r.ranklist[i].publisher+'</p>'+
                '<p class="rank">'+
                    '<span></span>'+
                    '<span class="regRank" style="margin-left:5px">'+r.ranklist[i].reg_rank+'위</span>'+
                    '<span class="changeRank" style="margin-left:5px">('+r.ranklist[i].change_rank+'위▴)</span>'+
                '</p>'+
            '</div>';
            $(".book_rank").append(tag);
            }
        }
    })
    // 검색도서 찾기
    $("#search_btn").click(function(){
        let keyword = $("#search_keyword").val();
        getBookCount(keyword);
        // offset = keyword * 10;
        currentPage = 0;
        getBookList(keyword,0);
    })

    // let offset = 0;
    let currentPage = 0;
    let totalPage = 0;

    getBookList("",0);
    
    $("#book_next").click(function(){
        currentPage++;
        let keyword = $("#search_keyword").val();
        // if(currentPage >= totalPage) currentPage = totalPage - 1;
        getBookList(keyword, currentPage);
        // $(".book_list_tbody").css("display", "none");
        // $(".book_list_tbody").eq(currentPage).css("display", "table-row-group");
        // $(".current").html(offset+10)
    })
    $("#book_prev").click(function(){
        currentPage--;
        let keyword = $("#search_keyword").val();
        if(currentPage < 0) currentPage = 0;
        getBookList(keyword, currentPage);
        // $(".book_list_tbody").css("display", "none");
        // $(".book_list_tbody").eq(currentPage).css("display", "table-row-group");
        // $(".current").html(offset+10)
    })

    function getBookList(keyword,offset) {
        offset = offset * 10
        // $(".book_list_tbl").html(
        //     '<thead><tr><td>도서명</td><td>권</td><td>저자</td><td>출판사</td><td>발행일</td></tr></thead>'
        // );
        // 오프셋을 전달해서 조회하는 방식은 항상 값을 10개를 갖고오기 때문에
        let url = "/api/book?keyword="+keyword+"&offset="+offset ;

        let total = 0;
        // currentPage = 0;
        $.ajax ({
            type:"get",
            url:url,
            success:function(r){
                console.log(r)
                total = total = Math.ceil(r.data.length/10);
                console.log(total)
                // 이 tbody는 항상 1개일수 밖에 없습니다..
                // for(let i=0; i<total; i++) {
                //     $(".book_list_tbl").append('<tbody class="book_list_tbody"></tbody>');
                // }
                $("#book_list_tbody").html("");
                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 10);
                    let tag = 
                    '<tr>'+
                        '<td>'+r.data[i].title+'</td>'+
                        '<td>'+r.data[i].vol+'</td>'+
                        '<td>'+r.data[i].author+'</td>'+
                        '<td>'+r.data[i].publisher+'</td>'+
                    '</tr>'
                    $("#book_list_tbody").append(tag);
                }
                // $(".book_list_tbody").css("display", "none");
                // $(".book_list_tbody").eq(0).css("display", "table-row-group");
                // $(".total").html(total);
                $(".current").html(currentPage + 1)
            }
        })
    }

    function getBookCount(keyword) {
        // 요청 넣음과 동시에 로딩 표시
        $(".loading").css("display", "block");
        $.ajax({
            type:"get",
            url:"/api/book/cnt?keyword="+keyword,
            success:function(cnt) {
                console.log(cnt);
                // 완료되고 나서 로딩 제거
                $(".loading").css("display", "");
                totalPage = Math.ceil(cnt/10);
                $(".total").html(totalPage);
            }
        })
    }
})
