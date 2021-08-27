$(function () {
    // 공공 최다 대출 도서관 목록

    // 공공/작은 도서관 비율
    $.ajax({
        type: "get",
        url: "/api/library/type",
        success: function (r) {
            console.log(r);
            let typeArr = new Array();
            for (let i = 0; i < r.type.length; i++) {
                typeArr.push(r.type[i].lib_type_nm);
            }

            let ctx = $("#type_chart");
            let type_Chart = new Chart(ctx, {
                type: "pie",
                // options:{
                //     response:false,
                // },
                data: {
                    labels: ["공공", "작은"],
                    datasets: [{
                        label: "공공/작은 도서관",
                        data: typeArr,
                        backgroundColor: ["#DFCD85", "#F7F6D3"]
                    }]
                },
                options: {
                    responsive: false,
                    plugins: {
                        legend: {
                            display: false,
                        }
                    }
                }
            });
        }
    });

    // 도서관 목록 지역1선택
    $("#adrress1_select").change(function () {
        console.log("changed");
        let address1 = $("#adrress1_select").find("option:selected").val();
        // getpublic -> getPublic 
        getPublicInfoByregion(address1);
    })
    let currentPage = 0;
    let totalPage = 0;

    getPublicInfoByregion("서울");
    
    $("#library_next").click(function(){
        currentPage++;
        if(currentPage >= totalPage) currentPage = totalPage - 1;
        $(".public_tbody").css("display", "none");
        $(".public_tbody").eq(currentPage).css("display", "table-row-group");
        $(".current").html(currentPage+1)
    })
    $("#library_prev").click(function(){
        currentPage--;
        if(currentPage < 0) currentPage = 0;
        $(".public_tbody").css("display", "none");
        $(".public_tbody").eq(currentPage).css("display", "table-row-group");
        $(".current").html(currentPage+1)
    })

    function getPublicInfoByregion(address1) {
        $(".public_library_tbl").html(
            '<thead><tr><td>도서관 명</td><td>도로명 주소</td></tr></thead>'
        );
        let url = "http://localhost:8090/api/public/address?address1=" + address1;
        let total = 0;
        currentPage = 0;
        $.ajax ({
            type:"get",
            url:url,
            success:function(r){
                console.log(r)
                totalPage = total = Math.ceil(r.data.length/5);
                for(let i=0; i<total; i++) {
                    $(".public_library_tbl").append('<tbody class="public_tbody"></tbody>');
                }

                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 5);
                    let tag = 
                    '<tr>'+
                        '<td>'+r.data[i].lib_name+'</td>'+
                        '<td>'+r.data[i].addr+'</td>'+
                    '</tr>'
                    $(".public_tbody").eq(page).append(tag);
                }
                $(".public_tbody").css("display", "none");
                $(".public_tbody").eq(0).css("display", "table-row-group");
                $(".total").html(total);
                $(".current").html(currentPage+1)
            }
        })
    }

    // 공공도서관 상세정보 (대표전화 , 휴관일 , 개관일 , 홈페이지)
    let infocurrentPage = 0;
    let infototalPage = 0;
    
    $("#detail_next").click(function(){
        infocurrentPage++;
        if(infocurrentPage >= infototalPage) infocurrentPage = infototalPage - 1;
        $(".public_library_tbody").css("display", "none");
        $(".public_library_tbody").eq(infocurrentPage).css("display", "table-row-group");
        $(".detail_current").html(infocurrentPage+1)
    })
    $("#detail_prev").click(function(){
        infocurrentPage--;
        if(infocurrentPage < 0) infocurrentPage = 0;
        $(".public_library_tbody").css("display", "none");
        $(".public_library_tbody").eq(infocurrentPage).css("display", "table-row-group");
        $(".detail_current").html(infocurrentPage+1)
    })

    let infototal = 0;
    currentPage = 0;
    $.ajax({
        type: "get",
        url: "/api/public/detail",
        success: function (r) {
            console.log(r);
            infototalPage = infototal = Math.ceil(r.data.length/1);
                for(let i=0; i<infototal; i++) {
                    $(".public_info_tbl").append('<tbody class="public_library_tbody"></tbody>');
                }
                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 1);
                    let tag = 
                    '<tr>'+
                        '<td><i class="fas fa-phone"></i>'+r.data[i].tel+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td><i class="fas fa-home"></i>'+r.data[i].homepage+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td><i class="far fa-clock"></i>'+r.data[i].operatingTime+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td><i class="far fa-calendar-times"></i>'+r.data[i].closedOn+'</td>'+
                    '</tr>'
                    $(".public_library_tbody").eq(page).append(tag);
                }
                $(".public_library_tbody").css("display", "none");
                $(".public_library_tbody").eq(0).css("display", "table-row-group");
                $(".detail_total").html(infototalPage);
                $(".detail_current").html(infocurrentPage+1)
            }
        })

    // 공공 베스트셀러

    let bestsellercurrentPage = 0;
    let bestsellertotalPage = 0;
    
    $("#bestseller_next").click(function(){
        bestsellercurrentPage++;
        if(bestsellercurrentPage >= bestsellertotalPage) bestsellercurrentPage = bestsellertotalPage - 1;
        $(".public_bestseller_tbody").css("display", "none");
        $(".public_bestseller_tbody").eq(bestsellercurrentPage).css("display", "table-row-group");
        $(".detail_current").html(bestsellercurrentPage+1)
    })
    $("#bestseller_prev").click(function(){
        bestsellercurrentPage--;
        if(bestsellercurrentPage < 0) bestsellercurrentPage = 0;
        $(".public_bestseller_tbody").css("display", "none");
        $(".public_bestseller_tbody").eq(bestsellercurrentPage).css("display", "table-row-group");
        $(".detail_current").html(bestsellercurrentPage+1)
    })

    let besttotal = 0;
    currentPage = 0;
    $.ajax({
        type: "get",
        url: "/api/bookrank/public",
        success: function (r) {
            console.log(r);
            bestsellertotalPage = besttotal = Math.ceil(r.data.length/1);
                for(let i=0; i<besttotal; i++) {
                    $(".public_bestseller_tbl").append('<tbody class="public_bestseller_tbody"></tbody>');
                }
                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 5);
                    let tag = 
                    '<tr>'+
                        '<td>'+r.data[i].title+'</td>'+
                        '<td>'+r.data[i].author+'</td>'+
                        '<td>'+r.data[i].description+'</td>'+
                        '<td>'+r.data[i].pub_date+'</td>'+
                    '</tr>'
                    $(".public_bestseller_tbody").eq(page).append(tag);
                }
                $(".public_bestseller_tbody").css("display", "none");
                $(".public_bestseller_tbody").eq(0).css("display", "table-row-group");
                $(".bestseller_total").html(total);
                $(".bestseller_current").html(bestsellercurrentPage+1)
            }
        })

    // 도서관 목록 지역1선택
    $("#adrress_select").change(function () {
        console.log("changed");
        let address = $("#adrress_select").find("option:selected").val();
        
        getSmallInfoByregion(address);
    })
    let libcurrentPage = 0;
    let libtotalPage = 0;

    getSmallInfoByregion("서울");
    
    $("#library_next").click(function(){
        libcurrentPage++;
        if(libcurrentPage >= libtotalPage) libcurrentPage = libtotalPage - 1;
        $(".small_tbody").css("display", "none");
        $(".small_tbody").eq(libcurrentPage).css("display", "table-row-group");
        $(".current").html(libcurrentPage+1)
    })
    $("#library_prev").click(function(){
        libcurrentPage--;
        if(libcurrentPage < 0) libcurrentPage = 0;
        $(".small_tbody").css("display", "none");
        $(".small_tbody").eq(libcurrentPage).css("display", "table-row-group");
        $(".current").html(libcurrentPage+1)
    })

    function getSmallInfoByregion(address1) {
        $(".small_library_tbl").html(
            '<thead><tr><td>도서관 명</td><td>도로명 주소</td></tr></thead>'
        );
        let url = "http://localhost:8090/api/small/address?address1=" + address1;
        let total = 0;
        libcurrentPage = 0;
        $.ajax ({
            type:"get",
            url:url,
            success:function(r){
                console.log(r)
                libtotalPage = total = Math.ceil(r.data.length/5);
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
                $(".current").html(libcurrentPage+1)
            }
        })
    }

    // 작은도서관 상세정보 (대표전화 , 휴관일 , 개관일 , 홈페이지)
    let smallinfocurrentPage = 0;
    let smallinfototalPage = 0;
    
    $("#detail_next").click(function(){
        infocurrentPage++;
        if(smallinfocurrentPage >= smallinfototalPage) smallinfocurrentPage = smallinfototalPage - 1;
        $(".small_library_tbody").css("display", "none");
        $(".small_library_tbody").eq(smallinfocurrentPage).css("display", "table-row-group");
        $(".info_current").html(smallinfocurrentPage+1)
    })
    $("#detail_prev").click(function(){
        smallinfocurrentPage--;
        if(smallinfocurrentPage < 0) smallinfocurrentPage = 0;
        $(".small_library_tbody").css("display", "none");
        $(".small_library_tbody").eq(smallinfocurrentPage).css("display", "table-row-group");
        $(".info_current").html(smallinfocurrentPage+1)
    })

    let smalltotal = 0;
    currentPage = 0;
    $.ajax({
        type: "get",
        url: "/api/small/detail",
        success: function (r) {
            console.log(r);
            smallinfototalPage = smalltotal = Math.ceil(r.data.length/1);
                for(let i=0; i<smalltotal; i++) {
                    $(".small_info_tbl").append('<tbody class="small_library_tbody"></tbody>');
                }
                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 1);
                    let tag = 
                    '<tr>'+
                        '<td><i class="fas fa-phone"></i>'+r.data[i].tel+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td><i class="fas fa-home"></i>'+r.data[i].homepage+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td><i class="far fa-clock"></i>'+r.data[i].operatingTime+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td><i class="far fa-calendar-times"></i>'+r.data[i].closedOn+'</td>'+
                    '</tr>'
                    $(".small_library_tbody").eq(page).append(tag);
                }
                $(".small_library_tbody").css("display", "none");
                $(".small_library_tbody").eq(0).css("display", "table-row-group");
                $(".info_total").html(smallinfototalPage);
                $(".info_current").html(smallinfocurrentPage+1)
            }
        })
})