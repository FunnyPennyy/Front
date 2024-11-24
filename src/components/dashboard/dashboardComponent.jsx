import React from "react";
import "../../styles/dashboard/dashboard.css";
import "../../styles/dashboard/notice.css";
import "../../styles/dashboard/finance.css";
import "../../styles/dashboard/chart.css";

const dashboardComponent = () => {
  return (
    <div class="dashboard-contents">
      <div class="welcome-box"></div>
      <div id="dashboard-note">
        <div className="notice-section">
          <div class="notice-header">
            <h3>공지사항</h3>
            <a href="#" class="more-link">
              더보기
            </a>
          </div>
          <ul class="notice-list">
            <li>
              <span class="notice-title">
                학급 공지사항 관련 내용 -- ex) 학급 세금 계산 방법 안내
                <span class="badge">N</span>
              </span>
              <span class="notice-date">2024.05.</span>
            </li>
            <li>
              <span class="notice-title">
                학급 공지사항 관련 내용 -- ex) 학급 직업별 할 일들 & 월급
                지급방법
              </span>
              <span class="notice-date">2024.05.</span>
            </li>
            <li>
              <span class="notice-title">
                학급 공지사항 관련 내용 -- ex) 학급 세금 계산 방법 안내
              </span>
              <span class="notice-date">2024.05.</span>
            </li>
          </ul>
        </div>
        <div className="finance-section">
          <div class="finance-header">
            <h3>세금 현황</h3>
            <a href="#" class="more-link">
              더보기
            </a>
          </div>
          <div class="balance">
            1,000,000 <span>화폐</span>
          </div>
          <ul class="finance-list">
            <li>
              <span class="finance-date">2024.10.11</span>
              <div>
                <span class="finance-text">♻️ 쓰레기 봉투 구매</span>
                <span class="amount-negative">-10,000</span>
              </div>
            </li>
            <li>
              <span class="finance-date">2024.10.11</span>
              <div>
                <span class="finance-text">💰 세금 걷는 날</span>
                <span class="amount-positive">+100,000</span>
              </div>
            </li>
            <li>
              <span class="finance-date">2024.10.11</span>
              <div>
                <span class="finance-text">💰 세금 걷는 날</span>
                <span class="amount-positive">+100,000</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="chart-section">
          <div class="chart-header">
            <h3>주식추이</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboardComponent;
