import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import TodoDetail from "@pages/TodoDetail";
import Layout from "@shared/Layout";

import DashBoardLayout from "@shared/DashBoardLayout";
import Mypage from "@pages/Mypage";
import Like from "@pages/Like";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={<DashBoardLayout />}>
            <Route path="/dashboard/mypage" element={<Mypage />}></Route>
            <Route path="/dashboard/like" element={<Like />}></Route>
          </Route>

          <Route path="/:id" element={<TodoDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
