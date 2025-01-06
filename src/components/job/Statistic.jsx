import React, { useState } from "react";
import styled from "styled-components";

const Statistic = () => {
  const [columns, setColumns] = useState(["이름", ""]); // 기본 열
  const [students, setStudents] = useState(
    Array.from({ length: 20 }, (_, index) => ({
      name: `학생 ${index + 1}`,
      subjects: Array(columns.length - 1).fill(""),
    }))
  );

  const addColumn = () => {
    setColumns([...columns, ""]);
    setStudents(
      students.map((student) => ({
        ...student,
        subjects: [...student.subjects, ""],
      }))
    );
  };

  const updateColumnTitle = (e, colIndex) => {
    const updatedColumns = [...columns];
    updatedColumns[colIndex] = e.target.value;
    setColumns(updatedColumns);
    // 변경 사항 로그 출력
    console.log("Updated Columns:", updatedColumns);
  };

  const handleInputChange = (e, rowIndex, colIndex) => {
    const updatedStudents = [...students];
    updatedStudents[rowIndex].subjects[colIndex - 1] = e.target.value;
    setStudents(updatedStudents);

    // 변경 사항 콘솔 출력
    console.log("Updated Students:", updatedStudents);
  };

  return (
    <Container>
      <Title>숙제 검사</Title>
      <ButtonWrapper>
        <AddButton onClick={addColumn}>열 추가</AddButton>
      </ButtonWrapper>
      <Table>
        <thead>
          <tr>
            {columns.map((column, colIndex) => (
              <Th key={colIndex}>
                {colIndex === 0 ? (
                  column
                ) : (
                  <Input
                    value={column || ""}
                    placeholder={`ex) 수학숙제 ${colIndex}`}
                    onChange={(e) => updateColumnTitle(e, colIndex)}
                  />
                )}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student, rowIndex) => (
            <tr key={rowIndex}>
              <Td>{student.name}</Td>
              {student.subjects.map((subject, colIndex) => (
                <Td key={colIndex}>
                  <Select
                    value={subject}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, colIndex + 1)
                    }
                  >
                    <option value="">선택</option>
                    <option value="O">O</option>
                    <option value="X">X</option>
                  </Select>
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Statistic;

// Styled Components
const Container = styled.div`
  padding: 1rem;
  max-width: 75rem;
  background-color: #fafafa;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  margin-top: 0rem;
  font-size: 1.5rem;
  color: #333;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Table = styled.table`
  margin: 0.5rem 0;
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 0.5rem;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  font-size: 1rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
  font-size: 1rem;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.4rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.4rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;
`;

const AddButton = styled.button`
  padding: 0.3rem 0.4rem;
  border: none;
  background-color: rgb(238, 87, 87);
  color: white;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(192, 78, 78);
  }
`;
