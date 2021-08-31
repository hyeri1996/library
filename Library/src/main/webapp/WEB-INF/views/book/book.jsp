<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>도서 정보</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" integrity="sha512-aOG0c6nPNzGk+5zjwyJaoRUgCdOrfSDhmMID2u4+OIslr0GjpLKo7Xm0Ao3xmpM4T8AmIouRkqwj1nrdVsLKEQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.structure.min.css" integrity="sha512-oM24YOsgj1yCDHwW895ZtK7zoDQgscnwkCLXcPUNsTRwoW1T1nDIuwkZq/O6oLYjpuz4DfEDr02Pguu68r4/3w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.theme.min.css" integrity="sha512-9h7XRlUeUwcHUf9bNiWSTO9ovOWFELxTlViP801e5BbwNJ5ir9ua6L20tEroWZdm+HFBAWBLx2qH4l4QHHlRyg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/assets/css/book.css">
    <script src="https://kit.fontawesome.com/ef5f05643d.js" crossorigin="anonymous"></script>
    <script src="http://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.0/dist/chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" integrity="sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="/assets/js/book.js"></script>
</head>
<body>
    <div class="loading">
        <img src="/assets/images/loading.gif" alt="">
    </div>
    <%@include file="/WEB-INF/views/includes/menu.jsp"%>
    <div class="container">
        <p>인기 상승 도서</p>
        <hr style="border: solid 3px rgb(221, 171, 171); width: 85%;">
        <div class="dashboard_area">
            <div class="rank_dashboard">
                <div class="content_right">
                    <div class="book_rank">
                
                    </div>
                </div>
            </div>
            <div class="book_list">
                <div class="search_book">
                    <p>
                        <i class="fas fa-search  fa-rotate-90" style="font-size: 30px;"></i>
                        도서 찾기
                    </p>
                    <hr style="border: solid 3px rgb(221, 171, 171); width: 85%;">
                <div class="search_book_box">
                    <input type="text" id="search_keyword" placeholder="찾으시는 책의 제목을 입력해 주세요.">
                    <button id="search_btn">
                        <span>검색</span>
                    </button>
                    <hr style="border: solid 3px rgb(221, 171, 171); width: 85%;">
                    <div class="search_book_list">
                    <table class="book_list_tbl">
                        <thead>
                            <tr>
                                <td>도서 명</td>
                                <td>권</td>
                                <td>저자</td>
                                <td>출판사</td>
                            </tr>
                        </thead>
                        <tbody id="book_list_tbody">
                        </tbody>
                    </table>
                    <div class="search_pager_area">
                        <button id="book_prev">&lt;</button>
                        <span class="current">이전페이지</span> / <span class="total">다음페이지</span>
                        <button id="book_next">&gt;</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>