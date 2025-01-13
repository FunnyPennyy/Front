import React from "react";
import "../../styles/mypage/mypage-main.css";

const mypage = () => {
  return (
    <div className="mypage-container">
      <div className="job-card">
        <div>
          <img className="job-image" src="/img/mypage/job-elect.png" />
        </div>
        <div className="job-info">
          <h2 className="job-name">
            김멋사 <button className="edit-button">수정하기</button>
          </h2>
          <p className="school-info">00초등학교 N학년 N반</p>
          <p className="total-asset">
            총자산 <span>100,000원</span>
          </p>
          <p className="credit-grade">
            신용등급 <span className="credit-grade-n">N 등급</span>
          </p>
        </div>
      </div>

      {/* 내 자산 섹션 */}
      <div class="asset-section">
        <h3>내 자산</h3>
        <div class="asset-items">
          <div class="asset-item">
            <p class="asset-title">💳 통장</p>
            <p class="asset-balance">
              잔액 <span>100,000원</span>
            </p>
          </div>
        </div>
      </div>

      {/* 내 자격증 섹션 */}
      <div className="certificate-section">
        <h3>내 자격증</h3>
        <div className="certificate-items">
          <img
            className="certificate-item"
            src="/img/mypage/qualifications-1.png"
          ></img>
          <img
            className="certificate-item"
            src="/img/mypage/qualifications-2.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default mypage;
