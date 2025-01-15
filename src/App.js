import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BankbookPage from "./pages/bankbook/bankbook";
import CreateBankbook from "./pages/bankbook/createBankbook";
import Dashboard from "./pages/dashboard/Dashboard";
import Mypage from "./pages/mypage/Mypage";
import Layout from "./components/Layout";
import Todo from "./pages/todo/Todo";

function App() {
  return (
    <Router>
      <Routes>
        {/* Header가 필요 없는 페이지들 */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

        {/* Header가 필요한 페이지들 */}
        <Route element={<Layout />}>
          <Route path="/bankbook" element={<CreateBankbook />} />
          <Route path="/bankbook-list" element={<BankbookPage />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
