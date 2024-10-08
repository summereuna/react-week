import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "@pages/Home";
import TodoDetail from "@pages/TodoDetail";
import Layout from "@shared/Layout";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import MyTodos from "@pages/MyTodos";
import Todos from "@pages/Todos";
import useAuth from "@/hooks/useAuth";
import TodoAdd from "@pages/TodoAdd";
import TodoEdit from "@pages/TodoEdit";
// import DashBoardLayout from "@shared/DashBoardLayout";
// import Like from "@pages/Like";

// PrivateRoute : 로그인이 필요한 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있지 않은 사용자는 login 페이지로 리다이렉트
const PrivateRoute: React.FC<{ element: React.ElementType }> = ({
  element: Element,
  ...rest
}) => {
  const isLoggedIn = useAuth();
  return isLoggedIn ? <Element {...rest} /> : <Navigate to="/login" />;
};

// PublicRoute : 로그인이 필요없는 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있는 사용자는 mypage로 리다이렉트
const PublicRoute: React.FC<{ element: React.ElementType }> = ({
  element: Element,
  ...rest
}) => {
  const isLoggedIn = useAuth();
  return !isLoggedIn ? <Element {...rest} /> : <Navigate to="/mypage" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PublicRoute element={Login} />} />
          <Route path="/signup" element={<PublicRoute element={Signup} />} />
          <Route path="/mypage" element={<PrivateRoute element={MyTodos} />} />
          <Route path="/todos" element={<PrivateRoute element={Todos} />} />
          <Route
            path="/todos/add"
            element={<PrivateRoute element={TodoAdd} />}
          />
          <Route
            path="/todos/:id"
            element={<PrivateRoute element={TodoDetail} />}
          />
          <Route
            path="/todos/:id/edit"
            element={<PrivateRoute element={TodoEdit} />}
          />
          {/* <Route path="/dashboard" element={<DashBoardLayout />}>
            <Route path="/dashboard/myPage" element={<MyPage />}></Route>
            <Route path="/dashboard/like" element={<Like />}></Route>
          </Route> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
