import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authLogin } from "@/api/auth";
import { useAppDispatch } from "@/hooks/rtkHooks";
import { login } from "@redux/slices/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: authLogin,
    onSuccess: (data) => {
      console.log(data);
      dispatch(login(data.accessToken)); //리덕스 전역으로 토큰 저장
      queryClient.invalidateQueries({ queryKey: ["authLogin"]});
      navigate("/mypage");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  // const { login } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const LoginUser = {
        id,
        password,
      };
      mutate(LoginUser);
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인 실패");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
