$(function() {
    console.log("newbook js")

    // 공공도서관 베스트셀러
    $.ajax({
        type:"get",
        url:"/api/bookrank/public",
        success:function(r) {
            console.log(r);
            for(i=0; i<r.data.length; i++) {
                let tag = 
                '<tr>'+
                    '<td>'+r.data[i].title+'</td>'+
                    '<td>'+r.data[i].author+'</td>'+
                    '<td>'+r.data[i].description+'</td>'+
                    '<td>'+r.data[i].pub_date+'</td>'+
                '</tr>'
                $("#public_bestseller_tbody").append(tag);

            }
        }
    });


    // 작은도서관 베스트셀러
    $.ajax({
        type:"get",
        url:"/api/bookrank/small",
        success:function(r) {
            console.log(r);
            for(i=0; i<r.data.length; i++) {
                let tag = 
                '<tr>'+
                    '<td>'+r.data[i].title+'</td>'+
                    '<td>'+r.data[i].author+'</td>'+
                    '<td>'+r.data[i].description+'</td>'+
                    // '<td>'+r.data[i].publisher+'</td>'+
                    '<td>'+r.data[i].pub_date+'</td>'+
                '</tr>'
                $("#small_bestseller_tbody").append(tag);
            }
        }
    });


    // 신작 도서 목록 상세 (도서명, 저자, 도서소개, 출판사, 발행일)
    $.ajax ({
        type:"get",
        url:"/api/newbook/info",
        success:function(r) {
            console.log(r);
            for(let i=0; i<r.data.length; i++) {
                let tag = 
                '<tr>'+
                    '<td>'+r.data[i].book_title+'</td>'+
                    '<td>'+r.data[i].authors+'</td>'+
                    '<td>'+r.data[i].description+'</td>'+
                    '<td>'+r.data[i].publisher+'</td>'+
                    '<td>'+r.data[i].pub_date+'</td>'+
                '</tr>'
                $("#newbook_list_tbody").append(tag);
                
            }
        }
    });

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
