import React, { useState } from "react";
import styled from "styled-components";
import CustomCalendar from "../../components/todo/CustomCalendar";
import Todolist from "../../components/todo/Todolist";
import JobHandler from "../../components/job/JobHandler"; // JobHandler 컴포넌트 추가

const Todo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 현재 날짜를 초기값으로 설정
  const userJob = "은행원"; // 사용자 직업 (예: 은행원, 국세청 등)

  return (
    <div>
      <PageContainer>
        <CalendarAndListContainer>
          {/* CustomCalendar 컴포넌트 */}
          <CustomCalendar onChange={setSelectedDate} value={selectedDate} />
          {/* Todolist 컴포넌트 */}
          <TodolistWrapper>
            <Todolist selectedDate={selectedDate} userJob={userJob} />{" "}
            {/* userJob 전달 */}
          </TodolistWrapper>
        </CalendarAndListContainer>
      </PageContainer>
      {/* JobHandler 컴포넌트 */}
      <JobSection>
        <JobHandler job={userJob} />
      </JobSection>
    </div>
  );
};

export default Todo;

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0rem; /* CalendarAndListContainer와 JobSection 간격 */
  padding: 2rem 2rem 0rem 2rem;
`;

const CalendarAndListContainer = styled.div`
  display: flex;
  gap: 5rem; /* 달력과 Todolist 사이 간격 */
  width: 70%;
  max-width: 75rem;
  align-items: flex-start; /* 컨텐츠 위쪽 정렬 */
  height: 30rem; /* 고정 높이 설정 */
`;

const TodolistWrapper = styled.div`
  flex: 1;
  max-height: 100%; /* CalendarAndListContainer 내에서 높이 고정 */
  overflow-y: auto; /* 스크롤 가능 */
`;

const JobSection = styled.div`
  width: 70%; /* CalendarAndListContainer와 동일한 너비 설정 */
  max-width: 75rem; /* CalendarAndListContainer의 max-width와 동일 */
  margin: -12rem auto 0 auto; /* 상단 공백을 줄이고, 가운데 정렬 */
  padding: 1rem; /* 내부 여백 */
  background-color: white; /* 배경색 */
  box-sizing: border-box; /* 패딩을 포함한 크기 계산 */
`;
