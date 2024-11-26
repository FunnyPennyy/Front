import React, { useState } from "react";
import styled from "styled-components";
import CustomCalendar from "../../components/todo/CustomCalendar";
import Todolist from "../../components/todo/Todolist";

const Todo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 현재 날짜를 초기값으로 설정

  return (
    <PageContainer>
      <CalendarAndListContainer>
        {/* CustomCalendar 컴포넌트 */}
        <CustomCalendar onChange={setSelectedDate} value={selectedDate} />
        {/* Todolist 컴포넌트 */}
        <Todolist selectedDate={selectedDate} />
      </CalendarAndListContainer>
    </PageContainer>
  );
};

export default Todo;

// Styled Components
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const CalendarAndListContainer = styled.div`
  display: flex;
  gap: 4rem; /* 달력과 Todolist 사이 간격 */
  width: 70%; /* 부모 컨테이너 너비의 80%만 차지 */
  max-width: 75rem; /* 최대 너비를 제한하여 너무 넓어지지 않게 설정 */
  justify-content: center; /* 내부 내용 가운데 정렬 */
`;
