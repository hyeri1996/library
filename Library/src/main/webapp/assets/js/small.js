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
                    '<tr class="lib_tr">'+
                        '<td class="lib_name">'+r.data[i].lib_name+'</td>'+
                        '<td>'+r.data[i].addr+'</td>'+
                    '</tr>'
                    $(".small_tbody").eq(page).append(tag);
                }
                $(".lib_tr").click(function(){
                    let name = $(this).find(".lib_name").html();
                    $(".lib_tr").css("background-color", "");
                    $(this).css("background-color", "rgb(250, 227, 217)");
                    getLibraryDetail(name);
                    $(".search_box_area").addClass("open")
                    $(".small_info_area").addClass("open")
                })
                $(".small_tbody").css("display", "none");
                $(".small_tbody").eq(0).css("display", "table-row-group");
                $(".total").html(total);
                $(".current").html(currentPage+1)
            }
        })
    }

    // 작은도서관 상세정보 (대표전화 , 휴관일 , 개관일 , 홈페이지)
    let infocurrentPage = 0;
    let infototalPage = 0;
    
    $("#detail_next").click(function(){
        infocurrentPage++;
        if(infocurrentPage >= infototalPage) infocurrentPage = infototalPage - 1;
        $(".small_library_tbody").css("display", "none");
        $(".small_library_tbody").eq(infocurrentPage).css("display", "table-row-group");
        $(".current").html(infocurrentPage+1)
    })
    $("#detail_prev").click(function(){
        infocurrentPage--;
        if(infocurrentPage < 0) infocurrentPage = 0;
        $(".small_library_tbody").css("display", "none");
        $(".small_library_tbody").eq(infocurrentPage).css("display", "table-row-group");
        $(".current").html(infocurrentPage+1)
    })

    let infototal = 0;
    currentPage = 0;
    function getLibraryDetail(name) {
        $.ajax({
            type: "get",
            url: "/api/small/detail?name="+name,
            success: function (r) {
                console.log(r);
                $("#small_library_tbody").html("");
                let tag = 
                    '<tr>'+
                        '<td><i class="fas fa-phone"></i>'+r.data.tel+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td><i class="fas fa-home"></i>'+r.data.homepage+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td><i class="far fa-clock"></i>'+r.data.operatingTime+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td><i class="far fa-calendar-times"></i>'+r.data.closedOn+'</td>'+
                    '</tr>'
                $("#small_library_tbody").html(tag);
            // console.log(r);
            // infototalPage = infototal = Math.ceil(r.data.length/1);
            //     for(let i=0; i<infototal; i++) {
            //         $(".small_info_tbl").append('<tbody class="small_library_tbody"></tbody>');
            //     }
            //     for(let i=0; i<r.data.length; i++) {
            //         let page = Math.floor(i / 1);
            //         let tag = 
            //         '<tr>'+
            //             '<td><i class="fas fa-phone"></i>'+r.data[i].tel+'</td>'+
            //         '</tr>'+
            //         '<tr>'+
            //             '<td><i class="fas fa-home"></i>'+r.data[i].homepage+'</td>'+
            //         '</tr>'+
            //         '<tr>'+
            //             '<td><i class="far fa-clock"></i>'+r.data[i].operatingTime+'</td>'+
            //         '</tr>'+
            //         '<tr>'+
            //             '<td><i class="far fa-calendar-times"></i>'+r.data[i].closedOn+'</td>'+
            //         '</tr>'
            //         $(".small_library_tbody").eq(page).append(tag);
            //     }
            //     $(".small_library_tbody").css("display", "none");
            //     $(".small_library_tbody").eq(0).css("display", "table-row-group");
            //     $(".total").html(infototal);
            //     $(".current").html(currentPage+1)
            }
        })
    }


    // 작은 베스트셀러 (도서명, 저자, 발행일)

    let bestsellercurrentPage = 0;
    let bestsellertotalPage = 0;
    
    $("#bestseller_next").click(function(){
        bestsellercurrentPage++;
        if(bestsellercurrentPage >= bestsellertotalPage) bestsellercurrentPage = bestsellertotalPage - 1;
        $(".small_bestseller_tbody").css("display", "none");
        $(".small_bestseller_tbody").eq(bestsellercurrentPage).css("display", "table-row-group");
        $(".best_current").html(bestsellercurrentPage+1)
    })
    $("#bestseller_prev").click(function(){
        bestsellercurrentPage--;
        if(bestsellercurrentPage < 0) bestsellercurrentPage = 0;
        $(".small_bestseller_tbody").css("display", "none");
        $(".small_bestseller_tbody").eq(bestsellercurrentPage).css("display", "table-row-group");
        $(".best_current").html(bestsellercurrentPage+1)
    })

    let besttotal = 0;
    currentPage = 0;
    $(".loading").css("display", "block");
    $.ajax({
        type: "get",
        url: "/api/bookrank/small",
        success: function (r) {
            console.log(r);
            $(".loading").css("display", "");
            bestsellertotalPage = besttotal = Math.ceil(r.data.length/5);
                for(let i=0; i<besttotal; i++) {
                    $(".small_bestseller_tbl").append('<tbody class="small_bestseller_tbody"></tbody>');
                }
                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 5);
                    let tag = 
                    '<tr>'+
                        '<td>'+r.data[i].title+'</td>'+
                        '<td>'+r.data[i].author+'</td>'+
                        // '<td>'+r.data[i].description+'</td>'+
                        '<td>'+r.data[i].pub_date+'</td>'+
                    '</tr>'
                    $(".small_bestseller_tbody").eq(page).append(tag);
                }
                $(".small_bestseller_tbody").css("display", "none");
                $(".small_bestseller_tbody").eq(0).css("display", "table-row-group");
                $(".best_total").html(besttotal);
                $(".best_current").html(currentPage+1)
            }
        })
})