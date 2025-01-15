import React from "react";
import styled from "styled-components";

export default function TransferModal({
  transferDetails,
  setTransferDetails,
  transferAmount,
  setTransferAmount,
  onSubmit,
  onClose,
}) {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalHeader>계좌이체</ModalHeader>
        <TransferForm onSubmit={onSubmit}>
          <LabelContainer>
            <Label>이체 내용:</Label>
            <Input
              type="text"
              value={transferDetails}
              onChange={(e) => setTransferDetails(e.target.value)}
              placeholder="ex) 일기 면제권"
              required
            />
          </LabelContainer>
          <LabelContainer>
            <Label>이체 금액:</Label>
            <Input
              type="text"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              placeholder="ex) 200"
              required
            />
          </LabelContainer>
          <ModalActions>
            <SubmitButton type="submit">이체하기</SubmitButton>
          </ModalActions>
        </TransferForm>
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
  padding: 1rem 3.3rem;
  border-radius: 0.5rem;
  width: 28rem;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.3rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #666;
  }
`;

const ModalHeader = styled.h2`
  margin-bottom: 1.8rem;
  margin-top: 0.4rem;
`;

const TransferForm = styled.form`
  margin-top: 1rem;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 1rem;
  white-space: nowrap;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
