import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authRegister } from "@/api/auth";
import Form from "@components/Form";

const Signup = () => {
  const navigate = useNavigate();

  const [signUpUser, setSignUpUser] = useState({ ID: "", PASSWORD: "" });

  const changeNewUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpUser({ ...signUpUser, [name]: value });
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: authRegister,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["authRegister"] });
      navigate("/login");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const newUser = {
        id: signUpUser.ID,
        password: signUpUser.PASSWORD,
        nickname: "익명",
      };

      mutate(newUser);
    } catch (error) {
      console.error("회원 가입 실패:", error);
      alert("회원 가입 실패");
    }
  };

  return (
    <Form
      onChange={changeNewUser}
      onSubmit={handleSubmit}
      id={signUpUser.ID}
      pw={signUpUser.PASSWORD}
      isRegister={true}
    />
  );
};

export default Signup;
