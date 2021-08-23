<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>원하는 도서 찾기</title>
    <link rel="stylesheet" href="/assets/css/book.css">
    <link rel="stylesheet" href="/assets/css/menu.css">
</head>
<body>
    <div class="content_box">
        <%@include file="/WEB-INF/views/includes/menu.jsp"%>
        <h1>원하는 도서 찾기</h1>
        <div class="search_box">
            <input id="search" type="search" placeholder="찾으시는 책의 제목을 검색하세요">
        </div>
    </div>
</body>
</html>