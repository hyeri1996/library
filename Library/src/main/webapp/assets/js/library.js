$(function() {

    // 공공 최다 대출 도서관 목록
    
    // 공공/작은 도서관 비율
    $.ajax({
        type:"get",
        url:"/api/library/type",
        success:function(r) {
            console.log(r);
            let typeArr = new Array();
            for(let i=0; i<r.type.length; i++) {
                typeArr.push(r.type[i].lib_type_nm);
            }
            let ctx = $("#type_chart");
            let type_Chart = new Chart(ctx, {
                type:"pie",
                options:{
                    responsive:false,
                },
                data:{
                    labels:["공공", "작은"],
                    datasets:[
                        {
                            label:"공공도서관 / 작은도서관",
                            data:typeArr,
                            backgroundColor:["#FCF8E8", "#D4E2D4"]
                        }
                    ]
                }
            });
        }
    });

    // 작은도서관 정보 (도서관 명, 도로명주소)
    $.ajax({
        type:"get",
        url:"api/small/info",
        success:function(r) {
            console.log(r);
        }
    });

    // 작은도서관 상세정보 (대표번호, 홈페이지, 개관시간, 휴관일)
    $.ajax({
        type:"get",
        url:"/api/smalllibrary/info",
        success:function(r){
            console.log(r);
        }
    });

    // 공공도서관 정보 (도서관 명, 도로명 주소)

    $.ajax({
        type:"get",
        url:"/api/public/info",
        success:function(r) {
            console.log(r);
            for(let i=0; i<r.data.length; i++) {
                let tag = 
                '<tr>'+
                    '<td>'+r.data[i].lib_name+'</td>'+
                    '<td>'+r.data[i].addr+'</td>'+
                '</tr>'
                $("#public_library_tbody").append(tag);

            }
        }
    });

    // 공공도서관 상세정보 (대표번호, 홈페이지, 개관시간, 휴관일)
    $.ajax({
        type:"get",
        url:"/api/publiclibrary/info",
        success:function(r) {
            console.log(r);
        }
    })





    // 도서관 목록
    $("#adrress1_select").change(function() {
        let adrress = $("#adrress1_select").find("option:selected").val();
        getLirbraryInfo(adrress);
    })

    $.ajax ({
        type:"get",
        url:"/api/library",
        success:function(r) {
            console.log(r);

            for(let i=0; i<10; i++) {
                let tag = "<tbody class='library_tbody'></tbody>";
                $(".library_list_tbl").append(tag);
            }
            for(let i=0; i<r.data.length; i++) {
                let page = Math.floor(i/10);
                let tag = 
                '<tr>'+
                    '<td>'+r.data[i].lib_name+'</td>'+
                    '<td>'+r.data[i].addr+'</td>'+
                    // '<td>'+r.data[i].tel+'</td>'+
                    // '<td>'+r.data[i].homepage+'</td>'+
                    // '<td>'+r.data[i].operatingTime+'</td>'+
                    // '<td>'+r.data[i].closedOn+'</td>'+
                '</tr>'
                $(".library_tbody").eq(page).append(tag);
            }
            $(".library_tbody").eq(0).addClass("active");
            
            $("#library_next").click(function(){
                let currentPage = Number($(".current").html());
                currentPage++;
                if(currentPage > 10) currentPage = 10;
                $(".current").html(currentPage);
                $(".region-tbody").removeClass("active");
                $(".region-tbody").eq(currentPage-1).addClass("active");
            })
            $("#library_prev").click(function(){
                let currentPage = Number($(".current").html());
                currentPage--;
                if(currentPage < 1) currentPage = 1;
                $(".current").html(currentPage);
                $(".region-tbody").removeClass("active");
                $(".region-tbody").eq(currentPage-1).addClass("active");
            })
        }
    });

    $("#search").click(function() {
        let keyword = $("#search_keyword").val();
        let seq = $("#library_search option:selected").val();
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