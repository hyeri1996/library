$(function() {
    // 신작목록
    $.ajax ({
        type:"get",
        url:"/api/newbook/info",
        success:function(r) {
            console.log(r);
        }
    });
    // 공공도서관순위
    $.ajax({
        type:"get",
        url:"/api/bookrank/public",
        success:function(r) {
            console.log(r);
        }
    });
    // 작은도서관순위
    $.ajax({
        type:"get",
        url:"/api/bookrank/small",
        success:function(r) {
            console.log(r);
        }
    });

    // 신작보유 공공도서관 수량 순위
    $.ajax({
        type:"get",
        url:"/api/newbook/public/cnt",
        success:function(r) {
            console.log(r);
        }
    })
})
