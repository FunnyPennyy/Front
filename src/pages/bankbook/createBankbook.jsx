import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CreateBankbook() {
  const [isCreated, setIsCreated] = useState(false);
  const navigate = useNavigate();

  const handleCreateBankbook = () => {
    setIsCreated(true); // 통장 생성 상태로 변경
  };

  return (
    <Container>
      {!isCreated ? (
        <>
          <Header>아래 버튼을 눌러서 나만의 통장을 만들어요!</Header>
          <CreateButton onClick={handleCreateBankbook}>+</CreateButton>
        </>
      ) : (
        <SuccessMessage>
          <BankbookIcon>📔</BankbookIcon>
          <Message>나만의 통장이 생성되었어요! 🎉</Message>
          <GuideText>통장 목록에서 새로 생성된 통장을 확인해보세요!</GuideText>
          <NextButton onClick={() => navigate("/bankbook-list")}>
            통장 목록 보기
          </NextButton>
        </SuccessMessage>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20rem;
  background-color: #f8f9fa;
`;

const Header = styled.h1`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #343a40;
`;

const CreateButton = styled.button`
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 1.5s infinite;

  &:hover {
    background-color: #0056b3;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const GuideText = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #6c757d;
`;

const NextButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const BankbookIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #28a745;
`;
