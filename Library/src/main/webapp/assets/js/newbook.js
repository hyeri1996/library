$(function() {


    // 신작 도서 목록 상세 (도서명, 저자, 도서소개, 출판사, 발행일)
    let currentPage = 0;
    let totalPage = 0;
    
    getNewBookList(0);
    
    $("#newbook_next").click(function(){
        currentPage++;
        getNewBookList(currentPage);
        // if(newbookcurrentPage >= newbooktotalPage) newbookcurrentPage = newbooktotalPage - 1;
        // $(".newbook_list_tbody").css("display", "none");
        // $(".newbook_list_tbody").eq(newbookcurrentPage).css("display", "table-row-group");
        // $(".new_current").html(newbookcurrentPage+1)
    })
    $("#newbook_prev").click(function(){
        currentPage--;
        if(currentPage < 0) currentPage = 0;
        getNewBookList(currentPage);
        // $(".newbook_list_tbody").css("display", "none");
        // $(".newbook_list_tbody").eq(newbookcurrentPage).css("display", "table-row-group");
        // $(".new_current").html(newbookcurrentPage+1)
    })

    function getNewBookList(offset) {
        offset = offset * 12
        let url = "/api/newbook/info?offset="+offset ;
        let total = 0;
        $.ajax({
            type:"get",
            url:url,
            success:function(r) {
                console.log(r);
                total = total = Math.ceil(r.data.length/12);
                $(".new_book_area").html("");
                for(let i=0; i<r.data.length; i++){
                    let tag = 
                        // '<div class="new_book_area">'+
                            '<div class="item">'+
                                '<img class="image" src='+r.data[i].aladin_img_url+'>'+
                                '<div class="bookTitle">'+r.data[i].book_title+'</div>'+
                                '<div class="authors">'+r.data[i].authors+'</div>'+
                                '<div class="publisher">'+r.data[i].publisher+'</div>'+
                            '</div>';
                        // '</div>';
                    $(".new_book_area").append(tag);
                }
                $(".current").html(currentPage + 1)
            }
        })
    }
    

    // 신작도서 목록 (도서명, 저자, 출판사)

    $.ajax({
        type:"get",
        url:"/api/newbook/list",
        success:function(r){
            console.log(r);
            for(let i=0; i<r.data.length; i++) {
                let tag = 
                '<tr>'+
                    '<td>'+r.data[i].book_title+'</td>'+
                    '<td>'+r.data[i].authors+'</td>'+
                    '<td>'+r.data[i].publisher+'</td>'+
                '</tr>'
                $("#newbook_tbody").append(tag);
            }

        }
    })

});
