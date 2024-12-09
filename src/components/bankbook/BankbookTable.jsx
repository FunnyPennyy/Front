import React from "react";
import BankbookName from "./BankbookName";
import styled from "styled-components";

// 테스트용 더미 데이터
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

const dummyTransactions2 = [
  {
    date: "2024-01-01",
    description: "2주 예금",
    amount: 300000,
    balance: 300000,
  },
  {
    date: "2024-01-10",
    description: "예금 중도해지",
    amount: -300000,
    balance: 0,
  },
  {
    date: "2024-01-15",
    description: "예금 만기",
    amount: -300000,
    balance: 0,
  },
];

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

export default function BankbookTable() {
  return (
    <Container>
      <BankbookName userName="멋사" />
      <TransactionTable transactions={dummyTransactions1} />

      <Section>
        <BankbookName userName="멋사" type="savings" />
        <TransactionTable transactions={dummyTransactions2} />
      </Section>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 7rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  margin-top: 3.5rem;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 90%;
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
