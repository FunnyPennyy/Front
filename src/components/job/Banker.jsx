import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Banker = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "이다빈",
      job: "국세청",
      hasAccount: false,
      depositInfo: null,
    },
    {
      id: 2,
      name: "한다현",
      job: "은행원",
      hasAccount: true,
      depositInfo: { amount: 100000, period: 12, createdAt: new Date() },
    },
  ]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [depositAmount, setDepositAmount] = useState("");
  const [depositPeriod, setDepositPeriod] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedStudent(null);
    setIsModalOpen(false);
    setDepositAmount("");
    setDepositPeriod("");
    setWithdrawAmount("");
  };

  const createAccount = async () => {
    if (!selectedStudent || !depositAmount || !depositPeriod) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    try {
      // 예금통장 생성 API 호출
      const response = await axios.post("/deposit", {
        ownerId: selectedStudent.id, // 선택된 학생의 ID
        depositTypeId: "2", // 예금 유형 ID (예: "2"로 고정)
        amount: parseInt(depositAmount), // 예금 금액
      });

      if (response.status === 200) {
        // API 응답 데이터를 사용하여 상태 업데이트
        const data = response.data;
        alert("계좌가 성공적으로 생성되었습니다.");

        setStudents((prev) =>
          prev.map((student) =>
            student.id === selectedStudent.id
              ? {
                  ...student,
                  hasAccount: true,
                  depositInfo: {
                    amount: data.amount,
                    period: depositPeriod, // 사용자가 입력한 기간
                    createdAt: data.createdDate, // API 응답에서 생성일
                  },
                }
              : student
          )
        );
        closeModal();
      }
    } catch (error) {
      console.error("계좌 생성 중 오류 발생:", error);
      alert("계좌 생성에 실패했습니다.");
    }
  };

  const closeAccount = () => {
    if (selectedStudent) {
      setStudents((prev) =>
        prev.map((student) =>
          student.id === selectedStudent.id
            ? { ...student, hasAccount: false, depositInfo: null }
            : student
        )
      );
      closeModal();
    }
  };

  const calculateDaysSinceCreation = (createdAt) => {
    const now = new Date();
    const diffTime = Math.abs(now - new Date(createdAt));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 일수 계산
  };

  return (
    <Container>
      <Title>예금통장 존재 여부 목록</Title>
      <Table>
        <thead>
          <tr>
            <ThName>이름</ThName>
            <ThJob>직업</ThJob>
            <ThAccountStatus>예금통장 존재 여부</ThAccountStatus>
            <ThActions>예금통장 생성/해지</ThActions>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <TdName>{student.name}</TdName>
              <TdJob>{student.job}</TdJob>
              <TdAccountStatus>
                {student.hasAccount ? "O" : "X"}
              </TdAccountStatus>
              <TdActions>
                <ActionButton onClick={() => openModal(student)}>
                  {student.hasAccount ? "해지" : "생성"}
                </ActionButton>
              </TdActions>
            </tr>
          ))}
        </tbody>
      </Table>

      {isModalOpen && (
        <ModalOverlay>
          <Modal>
            <ModalHeader>
              <ModalTitle>
                {selectedStudent.hasAccount
                  ? `${selectedStudent.name}의 통장 해지`
                  : `${selectedStudent.name}의 통장 생성`}
              </ModalTitle>
              <CloseButton onClick={closeModal}>X</CloseButton>
            </ModalHeader>
            <ModalBody>
              {!selectedStudent.hasAccount && (
                <>
                  <Input
                    type="text"
                    placeholder="예금 금액 입력"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="예금 기간 입력 (주)"
                    value={depositPeriod}
                    onChange={(e) => setDepositPeriod(e.target.value)}
                  />
                  <ConfirmButton onClick={createAccount}>생성</ConfirmButton>
                </>
              )}
              {selectedStudent.hasAccount && selectedStudent.depositInfo && (
                <>
                  <p>예금 금액: {selectedStudent.depositInfo.amount}원</p>
                  <p>예금 기간: {selectedStudent.depositInfo.period}주</p>
                  <p>
                    예금 생성 후 경과일:{" "}
                    {calculateDaysSinceCreation(
                      selectedStudent.depositInfo.createdAt
                    )}
                    일
                  </p>
                  <Input
                    type="text"
                    placeholder="해지 금액 입력"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                  />
                  <ConfirmButton onClick={closeAccount}>해지</ConfirmButton>
                </>
              )}
            </ModalBody>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Banker;

// Styled Components
const Container = styled.div`
  padding: 1rem;
  max-width: 47rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  margin-top: 0rem;
  font-size: 1rem;
  color: #333;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const Th = styled.th`
  padding: 0.5rem;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  font-size: 0.95rem;
  text-align: center;
`;

const ThName = styled(Th)`
  width: 20%;
`;

const ThJob = styled(Th)`
  width: 30%;
`;

const ThAccountStatus = styled(Th)`
  width: 25%;
`;

const ThActions = styled(Th)`
  width: 25%;
`;

const Td = styled.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
  font-size: 0.9rem;
  text-align: center;
`;

const TdName = styled(Td)`
  width: 20%;
`;

const TdJob = styled(Td)`
  width: 30%;
`;

const TdAccountStatus = styled(Td)`
  width: 25%;
`;

const TdActions = styled(Td)`
  width: 25%;
`;

const ActionButton = styled.button`
  background-color: ${(props) =>
    props.disabled ? "#ddd" : "rgb(238, 87, 87)"};
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#ddd" : "rgb(192, 78, 78)"};
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h3`
  font-size: 1.35rem;
  margin: -0.3rem 0 0.5rem 0; /* 제목의 위아래 여백 제거 */
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const ModalBody = styled.div`
  margin-top: 1rem;
`;

const Input = styled.input`
  width: calc(100% - 2rem);
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;
`;

const ConfirmButton = styled.button`
  display: block;
  width: calc(100% - 10rem);
  padding: 0.75rem;
  border: none;
  border-radius: 0.25rem;
  background-color: rgb(238, 87, 87);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    background-color: rgb(192, 78, 78);
  }
`;
