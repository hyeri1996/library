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

    // 작은도서관 정보 (도서관 명, 도로명주소)
    $.ajax({
        type: "get",
        url: "api/small/info",
        success: function (r) {
            console.log(r);
        }
    });

    // 작은도서관 상세정보 (대표번호, 홈페이지, 개관시간, 휴관일)
    $.ajax({
        type: "get",
        url: "/api/smalllibrary/info",
        success: function (r) {
            console.log(r);
        }
    });

    // 공공도서관 정보 (도서관 명, 도로명 주소)
    // $.ajax({
    //     type: "get",
    //     url: "/api/public/info",
    //     success: function (r) {
    //         console.log(r);
    //         for (let i = 0; i < r.data.length; i++) {
    //             let tag =
    //                 '<tr>' +
    //                 '<td>' + r.data[i].lib_name + '</td>' +
    //                 '<td>' + r.data[i].addr + '</td>' +
    //                 '</tr>'
    //             $("#public_library_tbody").append(tag);

    //         }
    //     }
    // });

    // 공공도서관 상세정보 (대표번호, 홈페이지, 개관시간, 휴관일)
    $.ajax({
        type: "get",
        url: "/api/publiclibrary/info",
        success: function (r) {
            console.log(r);
            totalPage = total = Math.ceil(r.data.length/10);
                for(let i=0; i<total; i++) {
                    $(".public_info_tbl").append('<tbody class="public_library_tbody"></tbody>');
                }
                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 10);
                    let tag = 
                    '<tr>'+
                        '<td>'+r.data[i].tel+'</td>'+
                        '<td>'+r.data[i].homepage+'</td>'+
                        '<td>'+r.data[i].operatingTime+'</td>'+
                        '<td>'+r.data[i].closedOn+'</td>'+
                    '</tr>'
                    $(".public_library_tbody").eq(page).append(tag);
                }
                $(".public_library_tbody").css("display", "none");
                $(".public_library_tbody").eq(0).css("display", "table-row-group");
                $(".total").html(total);
                $(".current").html(currentPage+1)
            }
        })
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
        // = is missing...
        $(".public_library_tbl").html(
            '<thead><tr><td>도서관 명</td><td>도로명 주소</td></tr></thead>'
        );
        let url = "http://localhost:8090/api/public/address?address1=" + address1;
        let total = 0;
        currentPage = 0
        $.ajax ({
            type:"get",
            url:url,
            success:function(r){
                totalPage = total = Math.ceil(r.data.length/10);
                for(let i=0; i<total; i++) {
                    $(".public_library_tbl").append('<tbody class="public_tbody"></tbody>');
                }

                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 10);
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
    $("#search").click(function(){
        let address1 = $("#adrress1_select option:selected").val();
        let keyword = $("#search_keyword").val();
        if(address1 == "전체") address1 = null;
        getProductData(address1, keyword, 0);
    })



    // 공공도서관 베스트셀러

    
    $.ajax({
        type:"get",
        url:"/api/bookrank/public",
        success:function(r) {
            console.log(r);
            totalPage = total = Math.ceil(r.data.length/10);
                for(let i=0; i<total; i++) {
                    $(".public_bestseller_tbl").append('<tbody class="public_bestseller_tbody"></tbody>');
                }

                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 10);
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
                $(".total").html(total);
                $(".current").html(currentPage+1)
            }
        })



    // 작은 도서관 베스트셀러
    $.ajax({
        type:"get",
        url:"/api/bookrank/small",
        success:function(r) {
            console.log(r);
            totalPage = total = Math.ceil(r.data.length/10);
                for(let i=0; i<total; i++) {
                    $(".small_bestseller_tbl").append('<tbody class="small_bestseller_tbody"></tbody>');
                }

                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 10);
                    let tag = 
                    '<tr>'+
                        '<td>'+r.data[i].title+'</td>'+
                        '<td>'+r.data[i].author+'</td>'+
                        '<td>'+r.data[i].description+'</td>'+
                        '<td>'+r.data[i].pub_date+'</td>'+
                    '</tr>'
                    $(".small_bestseller_tbody").eq(page).append(tag);
                }
                $(".small_bestseller_tbody").css("display", "none");
                $(".small_bestseller_tbody").eq(0).css("display", "table-row-group");
                $(".total").html(total);
                $(".current").html(currentPage+1)
                }
            });