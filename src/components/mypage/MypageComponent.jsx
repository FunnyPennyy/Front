import React from "react";
import "../../styles/mypage/mypage-main.css";

const mypage = () => {
  return (
    <div className="mypage-container">
      <div className="job-card">
        <div className="job-image">직업카드(이미지)</div>
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
      <div className="asset-section">
        <h3>내 자산</h3>
        <div className="asset-items">
          <div className="asset-item"></div>
          <div className="asset-item"></div>
          <div className="asset-item"></div>
        </div>
      </div>

      {/* 내 자격증 섹션 */}
      <div className="certificate-section">
        <h3>내 자격증</h3>
        <div className="certificate-items">
          <div className="certificate-item"></div>
          <div className="certificate-item"></div>
          <div className="certificate-item"></div>
        </div>
      </div>
    </div>
  );
};

export default mypage;
