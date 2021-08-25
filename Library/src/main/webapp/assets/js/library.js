$(function() {

    // 공공 최다 대출 도서관 목록
    
    // 공공/작은 도서관 비율
    $.ajax({
        type:"get",
        url:"/api/library/type/lib_type_nm",
        success:function(r) {
            console.log(r);
            let libArr = new Array();
            let libLabel = new Array();
            for (let i=0; i<r.data.length; i++) {
                libArr.push(r.data[i].lib_type_nm);
                libLabel.push(r.data[i].lib_type_nm);
            }
            let libChart = new CharacterData($("#library_chart"), {
                type:"pie",
                options:{
                    responsive:false,
                },
                data:{
                    labels:libLabel,
                    datasets:[
                        {
                            label:"공공 / 작은 도서관 비율",
                            data:libArr,
                            backgroundColor:['rgb(100, 163, 111)', 'rgb(255, 225, 33)']
                        }
                    ]
                }
            });
        }
    });

    // 작은 최다 대출 도서관 목록
    // $.ajax({
    //     type:"",
    //     url:"",
    //     success:function(r) {
    //         console.log(r);
    //     }
    // })


    // 공공 / 작은 총 대출횟수 비율
    // $.ajax({
        //     type:"",
        //     url:"",
        //     success:function(r) {
        //         console.log(r);
        //     }
        // })
    


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
                    '<td>'+r.data[i].tel+'</td>'+
                    '<td>'+r.data[i].homepage+'</td>'+
                    '<td>'+r.data[i].operatingTime+'</td>'+
                    '<td>'+r.data[i].closedOn+'</td>'+
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