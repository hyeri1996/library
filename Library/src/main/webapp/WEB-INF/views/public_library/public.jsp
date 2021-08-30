<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>공공도서관 정보</title>
    <script src="https://kit.fontawesome.com/ef5f05643d.js" crossorigin="anonymous"></script>
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
                <p><i class="fas fa-landmark" style="font-size: 24px;"></i>
                    공공 도서관 찾기
                </p>
                <hr style="border: solid 3px rgb(221, 171, 171); width: 85%;">
            </div>
        </div>
    </div>
    <div class="dashboard_content">
        <div class="search_box_area">
            <select id="adrress1_select">
                <option value="">전국</option>
                <option value="서울">서울특별시</option>
                <option value="경기">경기도</option>
                <option value="인천">인천광역시</option>
                <option value="세종">세종특별자치시</option>
                <option value="대전">대전광역시</option>
                <option value="대구">대구광역시</option>
                <option value="울산">울산광역시</option>
                <option value="광주">광주광역시</option>
                <option value="부산">부산광역시</option>
                <option value="제주">제주특별자치도</option>
                <option value="경상남도">경상남도</option>
                <option value="경상북도">경상북도</option>
                <option value="전라남도">전라남도</option>
                <option value="전라북도">전라북도</option>
                <option value="충청남도">충청남도</option>
                <option value="충청북도">충청북도</option>
                <option value="강원">강원도</option>
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
                <!-- <div class="content_area"> -->
                    <tbody class="public_tbody">

                    </tbody>
                <!-- </div> -->
            </table>
            <div class="search_pager_area">
                <button id="library_prev">&lt;</button>
                <span class="current">이전페이지</span> / <span class="total">다음페이지</span>
                <button id="library_next">&gt;</button>
            </div>
        </div>
        <div class="public_info_area">
            <div class="search_box_detail">    
                <p>상세정보</p>
                <table class="public_info_tbl">
                    <tbody id="public_library_tbody">
                        
                    </tbody>
                </table>
            </div>
        </div>

    <div class="public_library_search">
            <div class="public_book_box">
                <p>베스트셀러</p>
                <hr style="border: solid 3px rgb(221, 171, 171); width: 85%;">
            </div>
        </div>
        <div class="dashboard_content">
            <div class="search_box">
                <table class="public_bestseller_tbl">
                    <thead>
                        <tr>
                            <td>도서 명</td>
                            <td>저자</td>
                            <td>도서 소개</td>
                            <td>발행일</td>
                        </tr>
                    </thead>
                    <tbody id="public_bestseller_tbody">

                    </tbody>
                </table>
                <div class="search_pager_area">
                    <button id="bestseller_prev">&lt;</button>
                    <span class="best_current">이전페이지</span> / <span class="best_total">다음페이지</span>
                    <button id="bestseller_next">&gt;</button>
                </div>
            </div>
        </div>
    </div>  
</body>
</html>