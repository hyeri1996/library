$(function(){
    
    $.ajax({
        type: "get",
        url: "/api/lend/month",
        success: function (r) {
            console.log("월별 정보");
            console.log(r);
        }
    })
})