import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import TodoDetail from "@pages/TodoDetail";
import Layout from "@components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<TodoDetail />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
