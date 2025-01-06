import React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const CustomCalendar = ({ onChange, value }) => {
  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
  };

  return (
    <CalendarContainer>
      <StyledCalendar
        onChange={handleDateChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
      />
    </CalendarContainer>
  );
};

export default CustomCalendar;

const CalendarContainer = styled.div`
  position: relative;
  width: 21rem; /* 달력 너비 조정 */
  height: 10rem;
  max-width: 100%; /* 반응형 대비 */
`;

const StyledCalendar = styled(Calendar)`
  .react-calendar {
    width: 100% !important; /* 전체 달력 너비 맞춤 */
    font-size: 0.8rem; /* 달력 글자 크기 축소 */
  }

  .react-calendar__tile {
    padding: 0.4rem !important; /* 날짜 셀의 패딩 축소 */
  }

  /* 오늘 날짜 기본 스타일 제거 */
  .react-calendar__tile--now {
    background: none !important; /* 배경색 제거 */
    color: inherit !important; /* 기본 텍스트 색상으로 복원 */
    border-radius: 0%; /* 기본 둥근 테두리 제거 */
  }

  /* 오늘 날짜 호버 스타일 */
  .react-calendar__tile--now:hover {
    background: #f0f0f0 !important; /* 호버 시 밝은 회색 배경 */
    color: inherit !important; /* 텍스트 색상 유지 */
    border-radius: 0%; /* 호버 상태 둥근 테두리 제거 */
  }

  /* 선택된 날짜 배경색 수정 */
  .react-calendar__tile--active {
    background: #e74343 !important; /* 선택된 날짜 배경색 */
    color: white !important; /* 텍스트 색상을 흰색으로 */
    border-radius: 8%; /* 둥근 테두리 */
  }

  /* 선택된 날짜 호버 스타일 */
  .react-calendar__tile--active:hover {
    background: #d63333 !important; /* 호버 시 약간 어두운 빨간색 */
    color: white !important; /* 텍스트 흰색 유지 */
  }

  /* 일반 날짜 호버 스타일 */
  .react-calendar__tile:hover {
    background: #f0f0f0 !important; /* 호버 시 밝은 회색 */
    color: inherit !important;
    border-radius: 8%; /* 둥근 테두리 */
  }

  /* 포커스된 날짜 스타일 */
  .react-calendar__tile:focus {
    background: #e74343 !important; /* 선택된 색상과 동일 */
    color: white !important; /* 텍스트 색상을 흰색으로 */
    border-radius: 8%; /* 둥근 테두리 */
  }

  /* 주말 텍스트 색상 설정 */
  .react-calendar__month-view__days__day--weekend {
    color: #e74343 !important; /* 주말 글자를 빨간색으로 */
  }

  /* 선택된 주말 텍스트 색상 조정 */
  .react-calendar__tile--active.react-calendar__month-view__days__day--weekend {
    color: white !important; /* 선택된 주말 텍스트는 흰색으로 */
  }
`;
