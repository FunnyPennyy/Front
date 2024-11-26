import React, { useState } from "react";
import CustomCalendar from "../../components/todo/CustomCalendar";

const Todo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 현재 날짜를 초기값으로 설정

  return (
    <div>
      {/* Custom Calendar 컴포넌트 */}
      <CustomCalendar onChange={setSelectedDate} value={selectedDate} />

      {/* 선택된 날짜 표시 */}
      <p>선택 날짜: {selectedDate.toDateString()}</p>
    </div>
  );
};

export default Todo;
