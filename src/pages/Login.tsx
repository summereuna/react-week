import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authLogin } from "@/api/auth";
import { useAppDispatch } from "@/hooks/rtkHooks";
import { login } from "@redux/slices/authSlice";
import Form from "@components/Form";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loginUser, setLoginUser] = useState({ ID: "", PASSWORD: "" });

  const changeLoginUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: authLogin,
    onSuccess: (data) => {
      console.log(data);
      dispatch(login(data.accessToken)); //리덕스 전역으로 토큰 저장
      queryClient.invalidateQueries({ queryKey: ["authLogin"] });
      navigate("/mypage");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const newLoginUser = {
        id: loginUser.ID,
        password: loginUser.PASSWORD,
      };

      mutate(newLoginUser);
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인 실패");
    }
  };

  return (
    <Form
      onChange={changeLoginUser}
      onSubmit={handleSubmit}
      id={loginUser.ID}
      pw={loginUser.PASSWORD}
      isRegister={false}
    />
  );
};

export default Login;
