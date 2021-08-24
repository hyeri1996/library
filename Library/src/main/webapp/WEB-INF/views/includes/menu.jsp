<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>도서관 및 도서 정보 대시보드</title>
    <link rel="stylesheet" href="/assets/css/reset.css">
    <link rel="stylesheet" href="/assets/css/menu.css">
</head>
<body>
    <div class="main_menu_list">
            <a href="/library" id="logo">
                <span>도서관 정보</span>
            </a>
        <ul class="main_menu">
                <a href="/book"><span class="book_info">도서 정보</span></a>
            </li>
            <li>
                <a href="/lend"><span>대출 추이 및 분석</span></a>
            </li>
            <li>
                <a href="/newbook"><span>추천 도서 및 신작 도서</span></a>
            </li>
        </ul>
    </div>
</body>
</html>