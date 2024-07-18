import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authRegister } from "@/api/auth";
import Form from "@components/Form";
import axios from "axios";
import { clearAlert, setAlert } from "@redux/slices/alertSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/rtkHooks";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const alertMessage = useAppSelector((state) => state.alert["signForm"]);

  const [signUpUser, setSignUpUser] = useState({ ID: "", PASSWORD: "" });

  const changeNewUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (alertMessage) {
      dispatch(clearAlert("signForm"));
    }

    const { name, value } = e.target;
    setSignUpUser({ ...signUpUser, [name]: value });
  };

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: authRegister,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authRegister"] });
      navigate("/login");
    },
    onError: (error: unknown) => {
      let errorMsg = "오류가 발생했습니다.\n회원가입을 다시 시도해 주세요.";
      if (axios.isAxiosError(error) && error.response) {
        if (
          error.response.data.message ===
          "아이디, 비밀번호, 닉네임은 필수값입니다."
        ) {
          errorMsg = "아이디와 비밀번호를 입력해 주세요.";
        } else {
          errorMsg = `${error.response.data.message}`;
        }
      }

      dispatch(
        setAlert({
          formId: "signForm",
          message: errorMsg,
        })
      );
    },
  });

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const newUser = {
      id: signUpUser.ID,
      password: signUpUser.PASSWORD,
      nickname: "익명",
    };

    mutate(newUser);
  };

  return (
    <Form
      onChange={changeNewUser}
      onSubmit={handleSubmit}
      id={signUpUser.ID}
      pw={signUpUser.PASSWORD}
      isRegister={true}
      isPending={isPending}
      alertMessage={alertMessage}
    />
  );
};

export default Signup;
