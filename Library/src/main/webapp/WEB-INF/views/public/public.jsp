<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>공공도서관 정보</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" integrity="sha512-aOG0c6nPNzGk+5zjwyJaoRUgCdOrfSDhmMID2u4+OIslr0GjpLKo7Xm0Ao3xmpM4T8AmIouRkqwj1nrdVsLKEQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.structure.min.css" integrity="sha512-oM24YOsgj1yCDHwW895ZtK7zoDQgscnwkCLXcPUNsTRwoW1T1nDIuwkZq/O6oLYjpuz4DfEDr02Pguu68r4/3w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.theme.min.css" integrity="sha512-9h7XRlUeUwcHUf9bNiWSTO9ovOWFELxTlViP801e5BbwNJ5ir9ua6L20tEroWZdm+HFBAWBLx2qH4l4QHHlRyg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/assets/css/menu.css">
    <link rel="stylesheet" href="/assets/css/public.css">
    <script src="http://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.0/dist/chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" integrity="sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="/assets/js/library.js"></script>
</head>
<body>
    <div class="container">
        <%@include file="/WEB-INF/views/includes/menu.jsp"%>
        <div class="public_library_search">
            <div class="public_book_box">
                <p>공공도서관 찾기</p>
                <hr style="border: solid 3px rgb(221, 171, 171); width: 85%;">
            </div>
        </div>
    </div>
    <div class="dashboard_content">
    
        <div class="search_box_area">
            <select id="adrress_select">
                <option value="서울특별시">서울특별시</option>
                <option value="경기도">경기도</option>
                <option value="인천광역시">인천광역시</option>
                <option value="세종특별자치시">세종특별자치시</option>
                <option value="대전광역시">대전광역시</option>
                <option value="대구광역시">대구광역시</option>
                <option value="울산광역시">울산광역시</option>
                <option value="광주광역시">광주광역시</option>
                <option value="부산광역시">부산광역시</option>
                <option value="제주특별자치도">제주특별자치도</option>
                <option value="경상남도">경상남도</option>
                <option value="경상북도">경상북도</option>
                <option value="전라남도">전라남도</option>
                <option value="전라북도">전라북도</option>
                <option value="충청남도">충청남도</option>
                <option value="충청북도">충청북도</option>
                <option value="강원도">강원도</option>
            </select>
            <input type="text" id="search_keyword" placeholder="도서관 명을 입력하세요.">
                <button id="search_btn">검색</button>
            <table class="public_library_tbl">
                <thead>
                    <tr>
                        <td>도서관 명</td>
                        <td>도로명 주소</td>
                    </tr>
                </thead>
                <tbody id="public_library_tbody">

                </tbody>
            </table>
            <div class="search_pager_area">
                <button id="library_prev">&lt;</button>
                <span class="current">이전페이지</span> / <span class="total">다음페이지</span>
                <button id="library_next">&gt;</button>
            </div>
        </div>
    </div>  
</body>
</html>