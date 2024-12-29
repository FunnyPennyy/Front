import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Todolist = ({ selectedDate, userJob }) => {
  const [tasksByDate, setTasksByDate] = useState({}); // 날짜별 할 일 관리
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(null); // 현재 수정 중인 할 일의 index
  const [editedTask, setEditedTask] = useState(""); // 수정 중인 내용

  // 선택된 날짜에 해당하는 할 일 목록 가져오기
  const currentDateKey = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD 형식
  const tasks = tasksByDate[currentDateKey] || []; // 선택된 날짜의 할 일 목록

  // 직업별 기본 할 일 설정
  useEffect(() => {
    const jobBasedTasks = {
      개발자: ["코드 리뷰", "React 학습", "GitLab 정리"],
      디자이너: ["UI/UX 시안 제작", "피드백 반영", "Figma 정리"],
      마케터: ["마케팅 캠페인 작성", "분석 보고서 준비", "콘텐츠 기획"],
    };

    const defaultTasks = jobBasedTasks[userJob] || [
      "기본 할 일 1",
      "기본 할 일 2",
    ];

    // 초기 기본값 설정 (이미 있는 날짜에는 설정하지 않음)
    setTasksByDate((prev) => ({
      ...prev,
      [currentDateKey]: prev[currentDateKey] || defaultTasks,
    }));
  }, [userJob, currentDateKey]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasksByDate((prev) => ({
        ...prev,
        [currentDateKey]: [...(prev[currentDateKey] || []), newTask],
      }));
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasksByDate((prev) => ({
      ...prev,
      [currentDateKey]: tasks.filter((_, i) => i !== index),
    }));
  };

  const startEditing = (index) => {
    setIsEditing(index); // 수정 모드로 변경
    setEditedTask(tasks[index]); // 기존 내용을 수정 상태로 설정
  };

  const saveEditedTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask; // 수정된 내용을 저장
    setTasksByDate((prev) => ({
      ...prev,
      [currentDateKey]: updatedTasks,
    }));
    setIsEditing(null); // 수정 모드 종료
    setEditedTask(""); // 수정 상태 초기화
  };

  return (
    <TodolistContainer>
      {/* <Title>
        {new Intl.DateTimeFormat("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(selectedDate)}
        의 할 일
      </Title> */}

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
          <TaskItem key={index}>
            <Checkbox type="checkbox" onChange={() => {}} />
            {isEditing === index ? (
              <EditInput
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
            ) : (
              <TaskText>{task}</TaskText>
            )}
            {isEditing === index ? (
              <SaveButton onClick={() => saveEditedTask(index)}>
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
