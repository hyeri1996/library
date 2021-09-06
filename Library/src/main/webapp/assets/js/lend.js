$(function(){
    


    let currentPage = 0;
    let totalPage = 0;

    getLendList(0);
    
    $("#lend_next").click(function(){
        currentPage++;
        getLendList(currentPage);
    })
    $("#lend_prev").click(function(){
        currentPage--;
        if(currentPage < 0) currentPage = 0;
        getLendList(currentPage);
    })

    function getLendList(offset) {
        offset = offset * 10
        let url = "/api/lend/cnt?offset="+offset;

        let total = 0;
        $(".loading").css("display", "block");
        $.ajax ({
            type:"get",
            url:url,
            success:function(r){
                console.log(r)
                $(".loading").css("display", "");
                total = total = Math.ceil(r.data.length/10);
                $("#lend_list_tbody").html("");
                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 10);
                    let tag = 
                    '<tr>'+
                        '<td>'+r.data[i].title+'</td>'+
                        '<td>'+r.data[i].vol+'</td>'+
                        '<td>'+r.data[i].author+'</td>'+
                        '<td>'+r.data[i].publisher+'</td>'+
                        '<td>'+r.data[i].cnt+'</td>'+
                    '</tr>'
                    $("#lend_list_tbody").append(tag);
                }
                $(".current").html(currentPage + 1)
            }
        })
    }

    $.ajax({
        type: "get",
        url: "/api/lend/month?ANALS_TRGET_YEAR=2021",
        success: function (r) {
            console.log("월별 정보");
            console.log(r);
            
            let monthArr = new Array();
            let lendArr = new Array();
            for (let i = 0; i < r.lendmonth.length; i++) {
                monthArr.push(r.lendmonth[i].anals_TRGET_MT);
                lendArr.push(r.lendmonth[i].lon_RATE);
            }
            let ctx = $("#month_chart");
            let monthChart = new Chart(ctx, {
                type: 'line',
                options: {
                    responsive: false,
                },
                data: {
                    labels: monthArr,
                    datasets: [{
                            label: "월별 대출 횟수 비율",
                            data: lendArr,
                            backgroundColor: ['#798CD2']
                        }
                    ]
                }
            });
        }
    })

    $.ajax({
        type: "get",
        url: "/api/lend/day?ANALS_TRGET_YEAR=2021&ANALS_TRGET_MT=6",
        success: function (r) {
            console.log("일별 정보");
            console.log(r);
            let dayArr = new Array();
            let lendArr = new Array();
            for (let i = 0; i < r.lendDay.length; i++) {
                dayArr.push(r.lendDay[i].wkday_NM);
                lendArr.push(r.lendDay[i].lon_RATE);
            }
            let ctx2 = $("#day_chart");
            let dayChart = new Chart(ctx2, {
                type: 'line',
                options: {
                    responsive: false,
                },
                data: {
                    labels: dayArr,
                    datasets: [{
                            label: "일별 대출 횟수 비율",
                            data: lendArr,
                            backgroundColor: ['#A3CF6E']
                        }
                    ]
                }
            });
        }
    })
    $.ajax({
        type: "get",
        url: "/api/lend/area?ANALS_TRGET_YEAR=2021&ANALS_TRGET_MT=5",
        success: function (r) {
            console.log("지역별 정보");
            console.log(r);
            let areaArr = new Array();
            let lendArr = new Array();
            for (let i = 0; i < r.lendarea.length; i++) {
                areaArr.push(r.lendarea[i].area);
                lendArr.push(r.lendarea[i].lon_RATE);
            }
            let ctx3 = $("#area_chart");
            let areaChart = new Chart(ctx3, {
                type: 'bar',
                options: {
                    responsive: false,
                },
                data: {
                    labels: areaArr,
                    datasets: [{
                            label: "지역별 대출 횟수 비율",
                            data: lendArr,
                            backgroundColor: ['#7DD4BE']
                        }
                    ]
                }
            });
        }
    })
})