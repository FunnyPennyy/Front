import React, { useState } from "react";
import styled from "styled-components";

const Todolist = ({ selectedDate }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(null); // 현재 수정 중인 할 일의 index
  const [editedTask, setEditedTask] = useState(""); // 수정 중인 내용

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setCompletedTasks([...completedTasks, false]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setCompletedTasks(updatedCompletedTasks);
  };

  const toggleCompleted = (index) => {
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = !updatedCompletedTasks[index];
    setCompletedTasks(updatedCompletedTasks);
  };

  const startEditing = (index) => {
    setIsEditing(index); // 수정 모드로 변경
    setEditedTask(tasks[index]); // 기존 내용을 수정 상태로 설정
  };

  const saveEditedTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask; // 수정된 내용을 저장
    setTasks(updatedTasks);
    setIsEditing(null); // 수정 모드 종료
    setEditedTask(""); // 수정 상태 초기화
  };

  return (
    <TodolistContainer>
      <Title>{selectedDate.toDateString()}의 할 일</Title>
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
            <Checkbox
              type="checkbox"
              checked={completedTasks[index]}
              onChange={() => toggleCompleted(index)}
            />
            {isEditing === index ? (
              <EditInput
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
            ) : (
              <TaskText completed={completedTasks[index]}>{task}</TaskText>
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

const TodolistContainer = styled.div`
  padding: 1rem;
  border: 0.0625rem solid #ddd;
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
`;

const AddButton = styled.button`
  padding: 0.5rem 0.75rem;
  border: 0.0625rem solid #ddd; /* 버튼 테두리 추가 */
  border-radius: 0.25rem;
  background-color: white; /* 배경색 흰색 */
  color: black; /* 글씨색 검정 */
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0; /* hover 시 밝은 회색 */
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: flex-start;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-bottom: 0.0625rem solid #ddd;
  border-radius: 0.25rem;
  background-color: #f9f9f9;
`;

const Checkbox = styled.input`
  margin-right: 0.625rem;
`;

const TaskText = styled.span`
  flex-grow: 1;
  margin-right: 0.625rem;
  word-break: break-word;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#999" : "inherit")};
`;

const EditInput = styled.input`
  flex-grow: 1;
  margin-right: 0.625rem;
  padding: 0rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem; /* TaskText와 동일한 폰트 크기 */
  font-family: inherit; /* 부모 요소의 폰트 스타일을 상속받음 */
  color: inherit; /* TaskText와 동일한 글씨 색상 */
`;

const EditButton = styled.button`
  background-color: white; /* 배경색 흰색 */
  border: 0.0625rem solid #ddd; /* 버튼 테두리 */
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: black; /* 글씨색 검정 */
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0; /* hover 시 밝은 회색 */
  }
`;

const SaveButton = styled.button`
  background-color: white; /* 배경색 흰색 */
  border: 0.0625rem solid #ddd; /* 버튼 테두리 */
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: black; /* 글씨색 검정 */
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0; /* hover 시 밝은 회색 */
  }
`;

const DeleteButton = styled.button`
  background-color: white; /* 배경색 흰색 */
  border: 0.0625rem solid #ddd; /* 버튼 테두리 */
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: black; /* 글씨색 검정 */
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0; /* hover 시 밝은 회색 */
  }
`;
