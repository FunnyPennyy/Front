import React, { useState } from "react";
import styled from "styled-components";

const TaxOfficer = () => {
  const [records, setRecords] = useState([]); // 초기 데이터 없음

  // 새 행 추가를 위한 상태 관리
  const [newRecord, setNewRecord] = useState({
    date: "",
    description: "",
    amount: "",
    balance: "",
  });

  // 수정 상태 관리
  const [editIndex, setEditIndex] = useState(null);

  // 입력 필드 변경 처리
  const handleInputChange = (e, field, index = null) => {
    if (index !== null) {
      // 수정 중인 데이터 변경
      const updatedRecords = [...records];
      updatedRecords[index][field] = e.target.value;
      setRecords(updatedRecords);
    } else {
      // 새 데이터 변경
      setNewRecord({ ...newRecord, [field]: e.target.value });
    }
  };

  // 새 행 추가
  const addRecord = () => {
    if (
      newRecord.date &&
      newRecord.description &&
      newRecord.amount &&
      newRecord.balance
    ) {
      setRecords([
        ...records,
        {
          ...newRecord,
          amount: parseInt(newRecord.amount),
          balance: parseInt(newRecord.balance),
        },
      ]);
      setNewRecord({ date: "", description: "", amount: "", balance: "" }); // 입력 필드 초기화
    } else {
      alert("모든 칸을 입력해야 합니다.");
    }
  };

  // 수정 버튼 동작
  const toggleEdit = (index) => {
    if (editIndex === index) {
      // 수정 완료
      setEditIndex(null);
    } else {
      // 수정 시작
      setEditIndex(index);
    }
  };

  return (
    <Container>
      <Title>세금 사용 내역</Title>
      <Table>
        <thead>
          <tr>
            <ThDate>날짜</ThDate>
            <ThDescription>내용</ThDescription>
            <Th>거래금액</Th>
            <Th>잔액</Th>
            <ThAction> </ThAction>
          </tr>
        </thead>
        <tbody>
          {/* 기존 데이터 렌더링 */}
          {records.map((record, index) => (
            <tr key={index}>
              <TdDate>
                {editIndex === index ? (
                  <Input
                    value={record.date}
                    onChange={(e) => handleInputChange(e, "date", index)}
                  />
                ) : (
                  record.date
                )}
              </TdDate>
              <TdDescription>
                {editIndex === index ? (
                  <Input
                    value={record.description}
                    onChange={(e) => handleInputChange(e, "description", index)}
                  />
                ) : (
                  record.description
                )}
              </TdDescription>
              <Td>
                {editIndex === index ? (
                  <Input
                    value={record.amount}
                    onChange={(e) => handleInputChange(e, "amount", index)}
                  />
                ) : (
                  `${record.amount.toLocaleString()}화폐`
                )}
              </Td>
              <Td>
                {editIndex === index ? (
                  <Input
                    value={record.balance}
                    onChange={(e) => handleInputChange(e, "balance", index)}
                  />
                ) : (
                  `${record.balance.toLocaleString()}화폐`
                )}
              </Td>
              <TdAction>
                <ActionButton onClick={() => toggleEdit(index)}>
                  {editIndex === index ? "완료" : "수정"}
                </ActionButton>
              </TdAction>
            </tr>
          ))}
          {/* 새로운 입력 행 */}
          <tr>
            <TdDate>
              <Input
                type="text"
                placeholder="ex) 12/30"
                value={newRecord.date}
                onChange={(e) => handleInputChange(e, "date")}
              />
            </TdDate>
            <TdDescription>
              <Input
                type="text"
                placeholder="ex) 쓰레기봉투 구매"
                value={newRecord.description}
                onChange={(e) => handleInputChange(e, "description")}
              />
            </TdDescription>
            <Td>
              <Input
                type="text"
                placeholder="ex) -1000"
                value={newRecord.amount}
                onChange={(e) => handleInputChange(e, "amount")}
              />
            </Td>
            <Td>
              <Input
                type="text"
                placeholder="ex) 200000"
                value={newRecord.balance}
                onChange={(e) => handleInputChange(e, "balance")}
              />
            </Td>
            <TdAction>
              <AddButton onClick={addRecord}>추가</AddButton>
            </TdAction>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default TaxOfficer;

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

const ThDate = styled(Th)`
  width: 10%;
`;

const ThDescription = styled(Th)`
  width: 50%;
`;

const ThAction = styled(Th)`
  width: 9%;
  background-color: transparent;
  border: none;
`;

const Td = styled.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
  font-size: 1rem;
  text-align: left;
`;

const TdDate = styled(Td)`
  width: 10%;
`;

const TdDescription = styled(Td)`
  width: 50%;
`;

const TdAction = styled(Td)`
  width: 9%;
  background-color: transparent;
  border: none;
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

const ActionButton = styled(AddButton)`
  background-color: rgb(42, 140, 244);
  &:hover {
    background-color: #0056b3;
  }
`;
