import React from "react";
import styled from "styled-components";

export default function SuccessModal({
  transferDetails,
  transferAmount,
  onClose,
}) {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalHeader>이체 성공</ModalHeader>
        <Message>
          대통령(선생님)에게 <strong>{transferDetails}</strong> 내용으로{" "}
          <strong>{transferAmount.toLocaleString()}원</strong> 이체 완료!
        </Message>
      </ModalContent>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 30rem;
  text-align: center;
  position: relative; /* X 버튼 위치를 설정하기 위해 relative 추가 */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const ModalHeader = styled.h2`
  margin-bottom: 1.3rem;
  margin-top: 0.5rem;
`;

const Message = styled.p`
  font-size: 1rem;
`;
