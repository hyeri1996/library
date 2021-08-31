$(function(){

    
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

    let lendcurrentPage = 0;
    let lendtotalPage = 0;
    
    $("#lend_next").click(function(){
        lendcurrentPage++;
        if(lendcurrentPage >= lendtotalPage) lendcurrentPage = lendtotalPage - 1;
        $(".lend_book_tbody").css("display", "none");
        $(".lend_book_tbody").eq(lendcurrentPage).css("display", "table-row-group");
        $(".current").html(lendcurrentPage+1)
    })
    $("#lend_prev").click(function(){
        lendcurrentPage--;
        if(lendcurrentPage < 0) lendcurrentPage = 0;
        $(".lend_book_tbody").css("display", "none");
        $(".lend_book_tbody").eq(lendcurrentPage).css("display", "table-row-group");
        $(".current").html(lendcurrentPage+1)
    })

    let lendcounttotal = 0;
    currentPage = 0;
    $.ajax({
        type: "get",
        url: "/api/lend/count",
        success: function (r) {
            console.log(r);
            lendtotalPage = lendcounttotal = Math.ceil(r.data.length/5);
                for(let i=0; i<lendcounttotal; i++) {
                    $(".lend_book_tbody").append('<tbody class="lend_book_tbody"></tbody>');
                }
                for(let i=0; i<r.data.length; i++) {
                    let page = Math.floor(i / 5);
                    let tag = 
                    '<tr>'+
                        '<td>'+r.data[i].title+'</td>'+
                        '<td>'+r.data[i].author+'</td>'+
                        '<td>'+r.data[i].publisher+'</td>'+
                        '<td>'+r.data[i].vol+'</td>'+
                    '</tr>'
                    $(".lend_book_tbody").eq(page).append(tag);
                }
                $(".lend_book_tbody").css("display", "none");
                $(".lend_book_tbody").eq(0).css("display", "table-row-group");
                $(".total").html(lendcounttotal);
                $(".current").html(currentPage+1)
            }
        })
})