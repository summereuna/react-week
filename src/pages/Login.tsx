import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authLogin } from "@/api/auth";
import { useAppDispatch } from "@/hooks/rtkHooks";
import { login } from "@redux/slices/authSlice";
import Form from "@components/Form";
import useModal from "@/hooks/useModal";
import ModalPortal from "@components/Modal/ModalPortal";
import ModalLayout from "@components/Modal/ModalLayout";
import ModalAlert from "@components/Modal/ModalAlert";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isVisible, openModal, closeModal } = useModal();
  const [alertContent, setAlertContent] = useState("");

  const [loginUser, setLoginUser] = useState({ ID: "", PASSWORD: "" });

  const changeLoginUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: authLogin,
    onSuccess: ({ userId, avatar, nickname, accessToken }) => {
      const user = { id: userId, avatar, nickname };
      dispatch(login({ accessToken, user })); //리덕스 전역으로 토큰 저장
      queryClient.invalidateQueries({ queryKey: ["authLogin"] });
      navigate("/mypage");
    },
    onError: (error: unknown) => {
      let errorMsg = "시스템 내부 오류가 발생했습니다.";
      if (axios.isAxiosError(error) && error.response) {
        errorMsg = `[${error.response.status}] 에러\n
        ${error.response.data.message}`;
      }
      setAlertContent(errorMsg);
      openModal();
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
    <>
      <Form
        onChange={changeLoginUser}
        onSubmit={handleSubmit}
        id={loginUser.ID}
        pw={loginUser.PASSWORD}
        isRegister={false}
      />

      {isVisible && (
        <ModalPortal>
          <ModalLayout onClose={closeModal}>
            <ModalAlert onClose={closeModal} content={alertContent} />
          </ModalLayout>
        </ModalPortal>
      )}
    </>
  );
};

export default Login;
