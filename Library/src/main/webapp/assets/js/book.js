$(function(){
    
    $.ajax({
        type:"get",
        url:"/api/book/rank/2021-08-25",
        success:function(r) {
            console.log(r);
            $("#changeRank").html(r.ranklist[0].change_rank);
            $("#regRank").html(r.ranklist[0].reg_rank);
            $("#bookTitle").html(r.ranklist[0].book_title);
            $("#author").html(r.ranklist[0].author);
            $("#publisher").html(r.ranklist[0].publisher);
            $(".book_rank").html("");
            for(let i=0; i<r.ranklist.length; i++){
                let tag = 
                '<div class="rank_box">'+
                '<p class="bookTitle">'+r.ranklist[i].book_title+'</p>'+
                '<p class="author">'+r.ranklist[i].author+'</p>'+
                '<p class="publisher">'+r.ranklist[i].publisher+'</p>'+
                '<p class="rank">'+
                    '<span></span>'+
                    '<span class="regRank" style="margin-left:5px">'+r.ranklist[i].reg_rank+'위</span>'+
                    '<span class="changeRank" style="margin-left:5px">('+r.ranklist[i].change_rank+'위▴)</span>'+
                '</p>'+
            '</div>';
            $(".book_rank").append(tag);
            }
        }
    })

    
    $.ajax({
        type: "get",
        url: "/api/book",
        success: function (r) {
            console.log(r);
            let titleName = new Array();
            let authorName = new Array();
            let publisherName = new Array();
    
            for (let i = 0; i < r.data.length; i++) {
                let title = r.data[i].title;
                let author = r.data[i].author;
                let publisher = r.data[i].publisher;
    
                titleName.push(title);
                authorName.push(author);
                publisherName.push(publisher);

    
                let page = Math.floor(i / 3);
                let tag =
                    '<tr>' +
                    '<td>' + r.data[i].title + '</td>' +
                    '<td>' + r.data[i].author + '</td>' +
                    '<td>' + r.data[i].publisher + '</td>' +
                    '</tr>'
                    $(".book-tbody").eq(page).append(tag);
            }
    
            $("#book_next").click(function () {
                let currentPage = Number($(".current").html());
                currentPage++;
    
                $(".current").html(currentPage);
                $(".book-tbody").removeClass("active");
                $(".book-tbody").eq(currentPage - 1).addClass("active");
            })
    
            $("#book_prev").click(function () {
                let currentPage = Number($(".current").html());
                currentPage--;
    
                $(".current").html(currentPage);
                $(".book-tbody").removeClass("active");
                $(".book-tbody").eq(currentPage - 1).addClass("active");
            })
        }
    })
})
