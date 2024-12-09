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
`;

const StyledCalendar = styled(Calendar)`
  .react-calendar__tile--now {
    background: #ffcccc !important; /* 원하는 배경색 */
    color: #000000 !important; /* 텍스트 색상 */
    border-radius: 8%;
  }

  .react-calendar__tile--now:hover {
    background: #ff9999 !important; /* 호버 시 배경색 */
    color: #000000 !important;
  }
`;
