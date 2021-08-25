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
                    // '<td>'+r.data[i].description+'</td>'+
                    '<td>'+r.data[i].publisher+'</td>'+
                '</tr>'
                $("#public_tbody").append(tag);

                $("#public_next").click(function(){
                    let currentPage = Number($(".current").html());
                    currentPage++;
                    if(currentPage > 10) currentPage = 10;
                    $(".current").html(currentPage);
                    $("#public_tbody").removeClass("active");
                    $("#public_tbody").eq(currentPage-1).addClass("active");
                })
                $("#public_prev").click(function(){
                    let currentPage = Number($(".current").html());
                    currentPage--;
                    if(currentPage < 1) currentPage = 1;
                    $(".current").html(currentPage);
                    $("#public_tbody").removeClass("active");
                    $("#public_tbody").eq(currentPage-1).addClass("active");
                })
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
                    // '<td>'+r.data[i].description+'</td>'+
                    '<td>'+r.data[i].publisher+'</td>'+
                '</tr>'
                $("#small_tbody").append(tag);

                $("#small_next").click(function(){
                    let currentPage = Number($(".current").html());
                    currentPage++;
                    if(currentPage > 10) currentPage = 10;
                    $(".current").html(currentPage);
                    $("#small_tbody").removeClass("active");
                    $("#small_tbody").eq(currentPage-1).addClass("active");
                })
                $("#small_prev").click(function(){
                    let currentPage = Number($(".current").html());
                    currentPage--;
                    if(currentPage < 1) currentPage = 1;
                    $(".current").html(currentPage);
                    $("#small_tbody").removeClass("active");
                    $("#small_tbody").eq(currentPage-1).addClass("active");
                })
            }
        }
    });


    // 신작목록
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
                $("#newbook_tbody").append(tag);
                $("#newbook_next").click(function(){
                    let currentPage = Number($(".current").html());
                    currentPage++;
                    if(currentPage > 10) currentPage = 10;
                    $(".current").html(currentPage);
                    $("#newbook_tbody").removeClass("active");
                    $("#newbook_tbody").eq(currentPage-1).addClass("active");
                })
                $("#newbook_prev").click(function(){
                    let currentPage = Number($(".current").html());
                    currentPage--;
                    if(currentPage < 1) currentPage = 1;
                    $(".current").html(currentPage);
                    $("#newbook_tbody").removeClass("active");
                    $("#newbook_tbody").eq(currentPage-1).addClass("active");
                })
            }
        }
    });

});
