<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>도서관 정보 대시보드</title>
    <script src="https://kit.fontawesome.com/ef5f05643d.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" integrity="sha512-aOG0c6nPNzGk+5zjwyJaoRUgCdOrfSDhmMID2u4+OIslr0GjpLKo7Xm0Ao3xmpM4T8AmIouRkqwj1nrdVsLKEQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.structure.min.css" integrity="sha512-oM24YOsgj1yCDHwW895ZtK7zoDQgscnwkCLXcPUNsTRwoW1T1nDIuwkZq/O6oLYjpuz4DfEDr02Pguu68r4/3w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.theme.min.css" integrity="sha512-9h7XRlUeUwcHUf9bNiWSTO9ovOWFELxTlViP801e5BbwNJ5ir9ua6L20tEroWZdm+HFBAWBLx2qH4l4QHHlRyg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/assets/css/index.css">
    <script src="http://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.0/dist/chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" integrity="sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="/assets/js/newbook.js"></script>
    <script src="/assets/js/library.js"></script>
</head>
<body>
    <%@include file="/WEB-INF/views/includes/menu.jsp"%>
    <section class="main_banner_area">
        <div class="banner_item">
            <div class="library_type_rate">
                <p>공공/작은 도서관 비율</p>
                <canvas id="type_chart" style="width: 200px; height: 180px; margin-left: 15px;"></canvas>
            </div>
        </div>
    </selection>
    <div class="content_box">
    <div class="new_book_list">
        <div class="new_book_box">
            <p><i class="fas fa-book" style="font-size: 34px;"></i>
                신작 도서
            </p>
            <a href="/">+</a>
            <hr id="first_line" style="border: solid 3px rgb(221, 171, 171); width: 85%;">
        </div>
    </div>
    <div class="dashboard_content">
        <div class="new_book_tbl_area">
            <table class="new_book_tbl">
                <thead>
                    <tr>
                        <td>도서 명</td>
                        <td>저자</td>
                        <td>출판사</td>
                    </tr>
                </thead>
                <tbody id="newbook_tbody">
                    
                </tbody>
            </table>
        </div>
    </div>
    <hr id ="last_line" style="border: solid 3px rgb(221, 171, 171); width: 85%;">  
</div>
</body>
</html>