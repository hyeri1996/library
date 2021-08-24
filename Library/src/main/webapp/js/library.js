$(function() {

    $.ajax({
        type:"get",
        url:"/api/library/type/{lib_type_nm}",
        success:function(r) {
            console.log(r);
        }
    })
})