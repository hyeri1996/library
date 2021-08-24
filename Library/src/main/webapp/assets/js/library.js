$(function() {
    
    // 공공/작은 비중
    $.ajax({
        type:"get",
        url:"/api/library/type/lib_type_nm",
        success:function(r) {
            console.log(r);
        }
    });

    
    // 도서관 목록
    $.ajax ({
        type:"get",
        url:"/api/library",
        success:function(r) {
            console.log(r);
        }
    });

    $("#search").click(function() {
        let seq = $("#library_search option:selected").val();
        let keyword = $("#search_keyword").val();
        if(seq == "전체") seq = null;
        getLibraryData (keyword, seq, 0);
    })
    $("#library_search").change(function() {
        let seq = $("#library_search option:selected").val();
        let keyword = $("#search_keyword").val();
        if(seq == "전체") seq = null;
        getLibraryData (keyword, seq, 0);
    })
})