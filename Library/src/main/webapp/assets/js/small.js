$(function(){
    $("#adrress1_select").change(function () {
        // console.log("changed");
        $("#search_keyword").val("");
        let address1 = $("#adrress1_select").find("option:selected").val();
        let keyword = $("#search_keyword").val();
        getSmallInfoByregion(address1, keyword);
    })

    $("#search_btn").click(function(){
        let address1 = $("#adrress1_select").find("option:selected").val();
        let keyword = $("#search_keyword").val();
        getSmallInfoByregion(address1, keyword);
    })
    let currentPage = 0;
    let totalPage = 0;

    getSmallInfoByregion("서울", "");
    
    $("#library_next").click(function(){
        currentPage++;
        if(currentPage >= totalPage) currentPage = totalPage - 1;
        $(".small_tbody").css("display", "none");
        $(".small_tbody").eq(currentPage).css("display", "table-row-group");
        $(".current").html(currentPage+1)
    })
    $("#library_prev").click(function(){
        currentPage--;
        if(currentPage < 0) currentPage = 0;
        $(".small_tbody").css("display", "none");
        $(".small_tbody").eq(currentPage).css("display", "table-row-group");
        $(".current").html(currentPage+1)
    })

    function getSmallInfoByregion(address1, keyword) {
        $(".small_library_tbl").html(
            '<thead><tr><td>도서관 명</td><td>도로명 주소</td></tr></thead>'
        );

        let url = "/api/small/address?address1=" + address1+"&keyword="+keyword;
        let total = 0;
        currentPage = 0;
        $.ajax ({
            type:"get",
            url:url,
            success:function(r){
                console.log(r)
                totalPage = total = Math.ceil(r.data.length/5);
                for(let i=0; i<total; i++) {
                    $(".small_library_tbl").append('<tbody class="small_tbody"></tbody>');
                }

                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 5);
                    let tag = 
                    '<tr>'+
                        '<td>'+r.data[i].lib_name+'</td>'+
                        '<td>'+r.data[i].addr+'</td>'+
                    '</tr>'
                    $(".small_tbody").eq(page).append(tag);
                }
                $(".small_tbody").css("display", "none");
                $(".small_tbody").eq(0).css("display", "table-row-group");
                $(".total").html(total);
                $(".current").html(currentPage+1)
            }
        })
    }
})