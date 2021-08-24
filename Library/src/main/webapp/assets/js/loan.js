$(function(){
    
    $.ajax({
        type: "get",
        url: "/api/lend/month?"+ANALS_TRGET_YEAR,
        success: function (r) {
            console.log("요일정보");
            console.log(r);

            // let ANALS_TRGET_YEAR = new Array();
            // let ANALS_TRGET_MT = new Array();
            // let avg(LON_RATE) = new Array();
    
            // for (let i = 0; i < r.data.length; i++) {
            //     regionArr.push(r.data[i].region);
            //     firstArr.push(r.data[i].firstCnt);
            //     secondArr.push(r.data[i].secondCnt);
    
            // }
            // let ctx3 = $("#vaccine_chart");
            // let vaccineChart = new Chart(ctx3, {
            //     type: 'bar',
            //     options: {
            //         responsive: false,
            //     },
            //     data: {
            //         labels: regionArr,
            //         datasets: [{
            //                 label: strDate+" 1차 접종현황",
            //                 data: firstArr,
            //                 backgroundColor: ['rgb(118, 210, 192)']
            //             },
            //             {
            //                 label: strDate+" 2차 접종현황",
            //                 data: secondArr,
            //                 backgroundColor: ['rgb(69, 160, 142)']
            //             }
            //         ]
            //     }
            // });
        }
    })
})