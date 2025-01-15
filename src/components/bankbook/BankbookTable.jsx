// import React, { useState } from "react";
// import BankbookName from "./BankbookName";
// import styled from "styled-components";

// const dummyTransactions1 = [
//   {
//     date: "2024-01-01",
//     description: "월급",
//     amount: 3000000,
//     balance: 3000000,
//   },
//   {
//     date: "2024-01-02",
//     description: "급식 1등권",
//     amount: -12000,
//     balance: 2988000,
//   },
//   {
//     date: "2024-01-03",
//     description: "예금 만기해지",
//     amount: 300000,
//     balance: 2938000,
//   },
// ];

// const dummyTransactions2 = [
//   {
//     date: "2024-01-01",
//     description: "2주 예금",
//     amount: 300000,
//     balance: 300000,
//   },
//   {
//     date: "2024-01-10",
//     description: "예금 중도해지",
//     amount: -300000,
//     balance: 0,
//   },
//   { date: "2024-01-15", description: "예금 만기", amount: -300000, balance: 0 },
// ];

// const TransactionTable = ({ transactions }) => (
//   <TableWrapper>
//     <Table>
//       <Thead>
//         <tr>
//           <Th center>날짜</Th>
//           <Th center>내용</Th>
//           <Th center>입출금액</Th>
//           <Th center>잔액</Th>
//         </tr>
//       </Thead>
//       <tbody>
//         {transactions.map((transaction, index) => (
//           <tr key={index}>
//             <Td center>{transaction.date}</Td>
//             <Td center>{transaction.description}</Td>
//             <Td center>{transaction.amount.toLocaleString()}</Td>
//             <Td center>{transaction.balance.toLocaleString()}</Td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   </TableWrapper>
// );

// export default function BankbookTable() {
//   const [showTransferModal, setShowTransferModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [transferDetails, setTransferDetails] = useState("");

//   const handleTransferSubmit = (e) => {
//     e.preventDefault();
//     setShowTransferModal(false); // 폼 모달 닫기
//     setShowSuccessModal(true); // 성공 모달 열기
//   };

//   return (
//     <Container>
//       <FirstSection>
//         <BankbookHeader>
//           <BankbookName userName="멋사" />
//           <TransferButton onClick={() => setShowTransferModal(true)}>
//             계좌이체
//           </TransferButton>
//         </BankbookHeader>
//         <TransactionTable transactions={dummyTransactions1} />
//       </FirstSection>

//       <Section>
//         <BankbookName userName="멋사" type="savings" />
//         <TransactionTable transactions={dummyTransactions2} />
//       </Section>

//       {/* 이체 폼 모달 */}
//       {showTransferModal && (
//         <Modal>
//           <ModalContent>
//             <ModalHeader>계좌이체</ModalHeader>
//             <TransferForm onSubmit={handleTransferSubmit}>
//               <Label>이체 내용:</Label>
//               <Input
//                 type="text"
//                 value={transferDetails}
//                 onChange={(e) => setTransferDetails(e.target.value)}
//                 required
//               />
//               <ModalActions>
//                 <SubmitButton type="submit">이체하기</SubmitButton>
//                 <CancelButton onClick={() => setShowTransferModal(false)}>
//                   취소
//                 </CancelButton>
//               </ModalActions>
//             </TransferForm>
//           </ModalContent>
//         </Modal>
//       )}

//       {/* 이체 성공 모달 */}
//       {showSuccessModal && (
//         <Modal>
//           <ModalContent>
//             <ModalHeader>이체 성공</ModalHeader>
//             <Message>
//               선생님(대통령)에게 "{transferDetails}" 내용으로 이체 완료!
//             </Message>
//             <ModalActions>
//               <CloseButton onClick={() => setShowSuccessModal(false)}>
//                 닫기
//               </CloseButton>
//             </ModalActions>
//           </ModalContent>
//         </Modal>
//       )}
//     </Container>
//   );
// }

// const Container = styled.div
//   padding: 1rem 7rem;
//   margin-top: 1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// ;

// const BankbookHeader = styled.div
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   margin-bottom: 1rem;
// ;

// const TransferButton = styled.button
//   padding: 0.5rem 1rem;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 0.25rem;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// ;

// const Section = styled.div
//   margin-top: 2.7rem;
//   width: 80%;
// ;

// const FirstSection = styled(Section)
//   margin-top: -0.5rem;
// ;

// const TableWrapper = styled.div
//   overflow-x: auto;
//   width: 100%;
// ;

// const Table = styled.table
//   width: 100%;
//   background-color: white;
//   border-collapse: collapse;
// ;

// const Thead = styled.thead
//   border-radius: 10px;
//   background-color: #f2f2f2;
// ;

// const Th = styled.th
//   padding: 0.5rem 1rem;
//   text-align: ${({ center }) => (center ? "center" : "left")};
// ;

// const Td = styled.td
//   padding: 0.5rem 1rem;
//   text-align: ${({ center }) => (center ? "center" : "left")};
// ;

// const Modal = styled.div
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// ;

// const ModalContent = styled.div
//   background-color: white;
//   padding: 2rem;
//   border-radius: 0.5rem;
//   width: 90%;
//   max-width: 30rem;
//   text-align: center;
// ;

// const ModalHeader = styled.h2
//   margin-bottom: 1rem;
// ;

// const TransferForm = styled.form
//   margin-top: 1rem;
// ;

// const Label = styled.label
//   display: block;
//   margin-bottom: 0.5rem;
//   font-weight: bold;
// ;

// const Input = styled.input
//   width: 100%;
//   padding: 0.5rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 0.25rem;
// ;

// const ModalActions = styled.div
//   display: flex;
//   justify-content: space-around;
//   margin-top: 1rem;
// ;

// const SubmitButton = styled.button
//   padding: 0.5rem 1rem;
//   background-color: #28a745;
//   color: white;
//   border: none;
//   border-radius: 0.25rem;
//   cursor: pointer;

//   &:hover {
//     background-color: #218838;
//   }
// ;

// const CancelButton = styled.button
//   padding: 0.5rem 1rem;
//   background-color: #dc3545;
//   color: white;
//   border: none;
//   border-radius: 0.25rem;
//   cursor: pointer;

//   &:hover {
//     background-color: #c82333;
//   }
// ;

// const CloseButton = styled.button
//   padding: 0.5rem 1rem;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 0.25rem;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// ;

// const Message = styled.p
//   margin: 1rem 0;
//   font-size: 1rem;
// ;

import React, { useState } from "react";
import BankbookName from "./BankbookName";
import styled from "styled-components";
import TransferModal from "./TransferModal";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

const dummyTransactions1 = [
  {
    date: "2024-01-01",
    description: "월급",
    amount: 3000000,
    balance: 3000000,
  },
  {
    date: "2024-01-02",
    description: "급식 1등권",
    amount: -12000,
    balance: 2988000,
  },
  {
    date: "2024-01-03",
    description: "예금 만기해지",
    amount: 300000,
    balance: 2938000,
  },
];

export default function BankbookTable() {
  const [transactions, setTransactions] = useState(dummyTransactions1);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [transferDetails, setTransferDetails] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  const handleTransferSubmit = (e) => {
    e.preventDefault();

    const currentBalance = transactions[transactions.length - 1].balance;

    // 잔액 부족 확인
    if (currentBalance < parseInt(transferAmount)) {
      setShowErrorModal(true);
      setShowTransferModal(false);
      return;
    }

    // 잔액 차감 및 새로운 거래 추가
    const newTransaction = {
      date: new Date().toISOString().slice(0, 10),
      description: `${transferDetails}`,
      amount: -parseInt(transferAmount),
      balance: currentBalance - parseInt(transferAmount),
    };

    setTransactions([...transactions, newTransaction]);
    setShowTransferModal(false);
    setShowSuccessModal(true);
  };

  return (
    <Container>
      <FirstSection>
        <BankbookHeader>
          <BankbookName userName="멋사" />
          <TransferButton onClick={() => setShowTransferModal(true)}>
            계좌이체
          </TransferButton>
        </BankbookHeader>
        <TransactionTable transactions={transactions} />
      </FirstSection>

      {/* 이체 폼 모달 */}
      {showTransferModal && (
        <TransferModal
          transferDetails={transferDetails}
          setTransferDetails={setTransferDetails}
          transferAmount={transferAmount}
          setTransferAmount={setTransferAmount}
          onSubmit={handleTransferSubmit}
          onClose={() => setShowTransferModal(false)}
        />
      )}

      {/* 이체 성공 모달 */}
      {showSuccessModal && (
        <SuccessModal
          transferDetails={transferDetails}
          transferAmount={transferAmount}
          onClose={() => setShowSuccessModal(false)}
        />
      )}

      {/* 잔액 부족 모달 */}
      {showErrorModal && (
        <ErrorModal onClose={() => setShowErrorModal(false)} />
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 7rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BankbookHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const TransferButton = styled.button`
  padding: 0.5rem 0.7rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FirstSection = styled.div`
  margin-top: -0.5rem;
  width: 75%;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  background-color: white;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  border-radius: 10px;
  background-color: #f2f2f2;
`;

const Th = styled.th`
  padding: 0.5rem 1rem;
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

const Td = styled.td`
  padding: 0.5rem 1rem;
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 30rem;
  text-align: center;
`;

const ModalHeader = styled.h2`
  margin-bottom: 1.4rem;
  margin-top: -0.5rem;
`;

const TransferForm = styled.form`
  margin-top: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
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

const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const CloseButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p`
  margin: 1rem 0;
  font-size: 1rem;
`;

const TransactionTable = ({ transactions }) => (
  <TableWrapper>
    <Table>
      <Thead>
        <tr>
          <Th center>날짜</Th>
          <Th center>내용</Th>
          <Th center>입출금액</Th>
          <Th center>잔액</Th>
        </tr>
      </Thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <Td center>{transaction.date}</Td>
            <Td center>{transaction.description}</Td>
            <Td center>{transaction.amount.toLocaleString()}</Td>
            <Td center>{transaction.balance.toLocaleString()}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  </TableWrapper>
);
