$(function() {


    // 신작 도서 목록 상세 (도서명, 저자, 도서소개, 출판사, 발행일)
    let newbookcurrentPage = 0;
    let newbooktotalPage = 0;
    
    $("#newbook_next").click(function(){
        newbookcurrentPage++;
        if(newbookcurrentPage >= newbooktotalPage) newbookcurrentPage = newbooktotalPage - 1;
        $(".newbook_list_tbody").css("display", "none");
        $(".newbook_list_tbody").eq(newbookcurrentPage).css("display", "table-row-group");
        $(".new_current").html(newbookcurrentPage+1)
    })
    $("#newbook_prev").click(function(){
        newbookcurrentPage--;
        if(newbookcurrentPage < 0) newbookcurrentPage = 0;
        $(".newbook_list_tbody").css("display", "none");
        $(".newbook_list_tbody").eq(newbookcurrentPage).css("display", "table-row-group");
        $(".new_current").html(newbookcurrentPage+1)
    })

    let newtotal = 0;
    currentPage = 0;
    $.ajax({
        type: "get",
        url: "/api/newbook/info",
        success: function (r) {
            console.log(r);
            newbooktotalPage = newtotal = Math.ceil(r.data.length/6);
                for(let i=0; i<newtotal; i++) {
                    $(".new_book_list_tbl").append('<tbody class="newbook_list_tbody"></tbody>');
                }
                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 6);
                    let tag = 
                    '<tr>'+
                        '<td>'+r.data[i].book_title+'</td>'+
                        '<td>'+r.data[i].authors+'</td>'+
                        '<td>'+r.data[i].description+'</td>'+
                        '<td>'+r.data[i].publisher+'</td>'+
                        '<td>'+r.data[i].pub_date+'</td>'+
                    '</tr>'
                    $(".newbook_list_tbody").eq(page).append(tag);
                }
                $(".newbook_list_tbody").css("display", "none");
                $(".newbook_list_tbody").eq(0).css("display", "table-row-group");
                $(".new_total").html(newtotal);
                $(".new_current").html(currentPage+1)
            }
        })

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
