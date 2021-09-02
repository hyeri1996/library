<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>대출 추이 및 분석</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" integrity="sha512-aOG0c6nPNzGk+5zjwyJaoRUgCdOrfSDhmMID2u4+OIslr0GjpLKo7Xm0Ao3xmpM4T8AmIouRkqwj1nrdVsLKEQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.structure.min.css" integrity="sha512-oM24YOsgj1yCDHwW895ZtK7zoDQgscnwkCLXcPUNsTRwoW1T1nDIuwkZq/O6oLYjpuz4DfEDr02Pguu68r4/3w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.theme.min.css" integrity="sha512-9h7XRlUeUwcHUf9bNiWSTO9ovOWFELxTlViP801e5BbwNJ5ir9ua6L20tEroWZdm+HFBAWBLx2qH4l4QHHlRyg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/assets/css/lend.css">
    <script src="http://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.0/dist/chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" integrity="sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="/assets/js/lend.js"></script>
</head>
<body>
    <div class="container">
        <%@include file="/WEB-INF/views/includes/menu.jsp"%>
        <div class="dashboard_area">
            <div class="dashboard_content">
                <div class="content_left">
                    <canvas id="month_chart" style="width: 100%; height: 100%;"></canvas>
                </div>
                <div class="content_right">
                    <canvas id="day_chart" style="width: 100%; height: 100%;"></canvas>
                </div>
            </div>
            <div class="dashboard_content">
                <div class="area_left">
                    <canvas id="area_chart" style="width: 100%; height: 100%;"></canvas>
                </div>
            </div>
            <div class="lend_count_book">
                <div class="lend_book_box">
                    <p>대출 횟수가 많은 책</p>
                    <hr style="border: solid 3px rgb(221, 171, 171); width: 85%;">
                    <div class="lend_book_list">
                        <table class="lend_list_tbl">
                            <thead>
                                <tr>
                                    <td>도서 명</td>
                                    <td>권</td>
                                    <td>저자</td>
                                    <td>출판사</td>
                                    <td>대출횟수</td>
                                </tr>
                            </thead>
                            <tbody id="lend_list_tbody">

                            </tbody>
                        </table>
                        <div class="lend_pager_area">
                            <button id="lend_prev">&lt;</button>
                            <span class="current">이전페이지</span> / <span class="total">다음페이지</span>
                            <button id="lend_next">&gt;</button>
                        </div>
                    </div>
            </div>
        </div>
</body>
</html>