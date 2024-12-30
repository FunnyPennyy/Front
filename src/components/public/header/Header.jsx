import React from "react";
import "../../../styles/header.css";

const Header = () => {
  return (
    <header>
      <div class="logo-div">
        <a href="/" id="funnypenny-logo-red">
          퍼니<span id="funnypenny-logo-green">페니</span>
        </a>
      </div>
      <div>
        <nav class="header-nav">
          <ul>
            <a href="/" class="header-nav-li-onclick">
              <img src="/img/header/file.png" alt="dashboard file img" />
              <p href="/">대시보드</p>
            </a>
            <a href="/todo" class="header-nav-li">
              <img src="/img/header/calendar.png" alt="calendar img" />
              <p href="/todo">오늘의할일</p>
            </a>
            <a href="/bankbook" class="header-nav-li">
              <img src="/img/header/money.png" alt="money img" />
              <p href="/bank">내 통장</p>
            </a>
            <a href="/mypage" class="header-nav-li">
              <img src="/img/header/mypage.png" alt="mypage img" />
              <p href="/mypage">내 정보</p>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
