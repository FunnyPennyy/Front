// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";

// const Todolist = ({ selectedDate, userJob }) => {
//   const [tasksByDate, setTasksByDate] = useState({}); // 날짜별 할 일 관리
//   const [newTask, setNewTask] = useState("");
//   const [isEditing, setIsEditing] = useState(null); // 현재 수정 중인 할 일의 index
//   const [editedTask, setEditedTask] = useState(""); // 수정 중인 내용

//   // 선택된 날짜에 해당하는 할 일 목록 가져오기
//   const currentDateKey = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD 형식
//   const tasks = tasksByDate[currentDateKey] || []; // 선택된 날짜의 할 일 목록

//   // 직업별 기본 할 일 설정
//   useEffect(() => {
//     const jobBasedTasks = {
//       개발자: ["코드 리뷰", "React 학습", "GitLab 정리"],
//       은행원: ["예적금 가입 도와주기", "이자율 확인하기"],
//       마케터: ["마케팅 캠페인 작성", "분석 보고서 준비", "콘텐츠 기획"],
//     };

//     const defaultTasks = jobBasedTasks[userJob] || [
//       "기본 할 일 1",
//       "기본 할 일 2",
//     ];

//     // 초기 기본값 설정 (이미 있는 날짜에는 설정하지 않음)
//     setTasksByDate((prev) => ({
//       ...prev,
//       [currentDateKey]: prev[currentDateKey] || defaultTasks,
//     }));
//   }, [userJob, currentDateKey]);

//   const addTask = () => {
//     if (newTask.trim() !== "") {
//       setTasksByDate((prev) => ({
//         ...prev,
//         [currentDateKey]: [...(prev[currentDateKey] || []), newTask],
//       }));
//       setNewTask("");
//     }
//   };

//   const deleteTask = (index) => {
//     setTasksByDate((prev) => ({
//       ...prev,
//       [currentDateKey]: tasks.filter((_, i) => i !== index),
//     }));
//   };

//   const startEditing = (index) => {
//     setIsEditing(index); // 수정 모드로 변경
//     setEditedTask(tasks[index]); // 기존 내용을 수정 상태로 설정
//   };

//   const saveEditedTask = async (index, contentId) => {
//     const updatedTask = editedTask.trim();

//     if (!updatedTask) {
//       alert("수정할 내용이 비어있습니다.");
//       return;
//     }

//     try {
//       // API 호출
//       const response = await axios.patch(`/api/todos/${contentId}`, {
//         newContent: updatedTask,
//       });

//       if (response.status === 201) {
//         // 응답이 성공적인 경우 로컬 상태 업데이트
//         const updatedTasks = [...tasks];
//         updatedTasks[index] = updatedTask; // 수정된 내용을 저장
//         setTasksByDate((prev) => ({
//           ...prev,
//           [currentDateKey]: updatedTasks,
//         }));
//         setIsEditing(null); // 수정 모드 종료
//         setEditedTask(""); // 수정 상태 초기화
//       }
//     } catch (error) {
//       console.error("Todo 수정 실패:", error);
//       alert("Todo를 수정하는 데 실패했습니다.");
//     }
//   };

//   return (
//     <TodolistContainer>
//       {/* <Title>
//         {new Intl.DateTimeFormat("ko-KR", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         }).format(selectedDate)}
//         의 할 일
//       </Title> */}

//       <TaskInputContainer>
//         <TaskInput
//           type="text"
//           value={newTask}
//           placeholder="할 일을 입력하세요"
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <AddButton onClick={addTask}>추가</AddButton>
//       </TaskInputContainer>
//       <TaskList>
//         {tasks.map((task, index) => (
//           <TaskItem key={index}>
//             <Checkbox type="checkbox" onChange={() => {}} />
//             {isEditing === index ? (
//               <EditInput
//                 type="text"
//                 value={editedTask}
//                 onChange={(e) => setEditedTask(e.target.value)}
//               />
//             ) : (
//               <TaskText>{task}</TaskText>
//             )}
//             {isEditing === index ? (
//               <SaveButton onClick={() => saveEditedTask(index, task.contentId)}>
//                 저장
//               </SaveButton>
//             ) : (
//               <EditButton onClick={() => startEditing(index)}>수정</EditButton>
//             )}
//             <DeleteButton onClick={() => deleteTask(index)}>삭제</DeleteButton>
//           </TaskItem>
//         ))}
//       </TaskList>
//     </TodolistContainer>
//   );
// };

// export default Todolist;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { instance } from "./../../api/instance";

const Todolist = ({ selectedDate, userJob }) => {
  const [tasksByDate, setTasksByDate] = useState({}); // 날짜별 할 일 관리
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(null); // 현재 수정 중인 할 일의 index
  const [editedTask, setEditedTask] = useState(""); // 수정 중인 내용

  // 선택된 날짜에 해당하는 할 일 목록 가져오기
  const currentDateKey = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD 형식
  const tasks = tasksByDate[currentDateKey] || []; // 선택된 날짜의 할 일 목록

  // Default Todo API를 통해 기본 Todo 생성
  useEffect(() => {
    const createDefaultTodo = async () => {
      try {
        const studentId = 1; // 실제 studentId로 대체 필요
        const response = await instance.post(`/todo/1`);

        if (response.status === 201) {
          console.log("Default Todo 생성 성공:", response.data);
          setTasksByDate((prev) => ({
            ...prev,
            [currentDateKey]: response.data.data, // Default Todo 데이터 저장
          }));
        }
      } catch (error) {
        console.error("Default Todo 생성 실패:", error.response?.data || error);
        if (error.response?.status === 400) {
          alert(
            error.response.data.message ||
              "Default Todo 생성 중 문제가 발생했습니다."
          );
        }
      }
    };

    createDefaultTodo();
  }, [currentDateKey]); // currentDateKey가 변경될 때마다 실행

  const addTask = async () => {
    const newTaskContent = newTask.trim();

    if (!newTaskContent) {
      alert("할 일을 입력해주세요.");
      return;
    }

    try {
      const todoId = "1"; // Todo ID는 실제 값으로 대체해야 합니다
      const response = await axios.post(`/todo/${todoId}/add`, {
        content: newTaskContent,
        status: false, // 기본값으로 완료되지 않은 상태
      });

      if (response.status === 201) {
        // 새로운 할 일을 로컬 상태에 추가
        setTasksByDate((prev) => ({
          ...prev,
          [currentDateKey]: [
            ...(prev[currentDateKey] || []),
            { content: newTaskContent, contentId: Date.now() }, // 임시 ID 생성
          ],
        }));
        setNewTask(""); // 입력 필드 초기화
      }
    } catch (error) {
      console.error("할 일 추가 실패:", error.response || error);
      alert("할 일을 추가하는 데 실패했습니다.");
    }
  };

  // 할 일 삭제 (로컬 상태 업데이트)
  const deleteTask = (index) => {
    setTasksByDate((prev) => ({
      ...prev,
      [currentDateKey]: tasks.filter((_, i) => i !== index),
    }));
  };

  // 수정 시작
  const startEditing = (index) => {
    setIsEditing(index); // 수정 모드로 변경
    setEditedTask(tasks[index].content); // 기존 내용을 수정 상태로 설정
  };

  // 수정 저장 (Todo 수정 API 연동)
  const saveEditedTask = async (index, contentId) => {
    const updatedTask = editedTask.trim();

    if (!updatedTask) {
      alert("수정할 내용을 입력해주세요.");
      return;
    }

    try {
      // Todo 수정 API 호출
      const response = await axios.patch(`/api/todos/${contentId}`, {
        newContent: updatedTask,
      });

      if (response.status === 201) {
        // 상태 업데이트
        const updatedTasks = [...tasks];
        updatedTasks[index] = { ...updatedTasks[index], content: updatedTask }; // 수정된 내용 반영
        setTasksByDate((prev) => ({
          ...prev,
          [currentDateKey]: updatedTasks,
        }));
        setIsEditing(null); // 수정 모드 종료
        setEditedTask(""); // 수정 상태 초기화
      }
    } catch (error) {
      console.error("Todo 수정 실패:", error);
      alert("Todo를 수정하는 데 실패했습니다.");
    }
  };

  return (
    <TodolistContainer>
      <TaskInputContainer>
        <TaskInput
          type="text"
          value={newTask}
          placeholder="할 일을 입력하세요"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <AddButton onClick={addTask}>추가</AddButton>
      </TaskInputContainer>
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem key={task.contentId}>
            <Checkbox type="checkbox" onChange={() => {}} />
            {isEditing === index ? (
              <EditInput
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
            ) : (
              <TaskText>{task.content}</TaskText>
            )}
            {isEditing === index ? (
              <SaveButton onClick={() => saveEditedTask(index, task.contentId)}>
                저장
              </SaveButton>
            ) : (
              <EditButton onClick={() => startEditing(index)}>수정</EditButton>
            )}
            <DeleteButton onClick={() => deleteTask(index)}>삭제</DeleteButton>
          </TaskItem>
        ))}
      </TaskList>
    </TodolistContainer>
  );
};

export default Todolist;

// 스타일은 그대로 유지
const TodolistContainer = styled.div`
  padding: 0.3rem;
  background-color: #fafafa;
  border-radius: 0.5rem;
  max-width: 35rem;
  flex: 1;
`;

const Title = styled.h3`
  margin-bottom: 1.25rem;
  text-align: center;
`;

const TaskInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TaskInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  margin-right: 0.625rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.25rem;
  font-size: 0.85rem; /* 글씨 크기 조정 */

  &:focus {
    border: 0.125rem solid black; /* 포커스 시 테두리를 조금 두껍게 설정 */
    outline: none; /* 기본 outline 제거 */
  }
`;

const AddButton = styled.button`
  padding: 0.5rem 0.5rem;
  border: 0.0625rem solid #ddd;
  border-radius: 0.25rem;
  background-color: white;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
  font-size: 0.8rem; /* 글씨 크기 조정 */
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0.65rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-start;
  max-height: 14rem; /* 최대 높이 설정 */
  overflow-y: auto; /* 세로 스크롤 표시 */
  scrollbar-width: thin; /* Firefox: 스크롤바 얇게 */
  scrollbar-color: #ddd transparent; /* Firefox: 스크롤바 색상 */

  /* Chrome, Edge, Safari */
  &::-webkit-scrollbar {
    width: 0.5rem; /* 스크롤바 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ddd; /* 스크롤바 색상 */
    border-radius: 0.25rem; /* 스크롤바 둥근 모서리 */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* 스크롤바 트랙 배경 */
  }
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem 0.2rem;
  border-bottom: 0.0625rem solid #ddd;
  border-radius: 0.25rem;
`;

const Checkbox = styled.input`
  margin-right: 0.625rem;
`;

const TaskText = styled.span`
  flex-grow: 1;
  margin-right: 0.625rem;
  word-break: break-word;
  font-size: 0.875rem; /* 글씨 크기 조정 */
`;

const EditInput = styled.input`
  flex-grow: 1;
  margin-right: 0.625rem;
  padding: 0rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-family: inherit;
  color: inherit;

  &:focus {
    border: 0.125rem solid black; /* 포커스 시 테두리를 조금 두껍게 설정 */
    outline: none; /* 기본 outline 제거 */
  }
`;

const EditButton = styled.button`
  background-color: white;
  border: 0.0625rem solid #ddd;
  padding: 0.35rem;
  border-radius: 0.25rem;
  color: black;
  font-size: 0.75rem;
  cursor: pointer;
  margin-right: 0.5rem; /* 삭제 버튼과 간격 추가 */

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SaveButton = styled.button`
  background-color: white;
  border: 0.0625rem solid #ddd;
  padding: 0.35rem;
  border-radius: 0.25rem;
  color: black;
  font-size: 0.75rem;
  cursor: pointer;
  margin-right: 0.5rem; /* 삭제 버튼과 간격 추가 */

  &:hover {
    background-color: #f0f0f0;
  }
`;

const DeleteButton = styled.button`
  background-color: white;
  border: 0.0625rem solid #ddd;
  padding: 0.35rem;
  border-radius: 0.25rem;
  color: black;
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
