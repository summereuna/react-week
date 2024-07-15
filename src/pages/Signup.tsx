import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authRegister } from "@/api/auth";
import Form from "@components/Form";
import useModal from "@/hooks/useModal";
import axios from "axios";
import ModalPortal from "@components/Modal/ModalPortal";
import ModalLayout from "@components/Modal/ModalLayout";
import ModalAlert from "@components/Modal/ModalAlert";

const Signup = () => {
  const navigate = useNavigate();

  const { isVisible, openModal, closeModal } = useModal();
  const [alertContent, setAlertContent] = useState("");

  const [signUpUser, setSignUpUser] = useState({ ID: "", PASSWORD: "" });

  const changeNewUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpUser({ ...signUpUser, [name]: value });
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: authRegister,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authRegister"] });
      navigate("/login");
    },
    onError: (error: unknown) => {
      let errorMsg = "오류가 발생했습니다. 다시 회원가입을 시도해 주세요.";
      if (axios.isAxiosError(error) && error.response) {
        errorMsg = `${error.response.data.message}`;
      }
      setAlertContent(errorMsg);
      openModal();
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
    <>
      <Form
        onChange={changeNewUser}
        onSubmit={handleSubmit}
        id={signUpUser.ID}
        pw={signUpUser.PASSWORD}
        isRegister={true}
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

export default Signup;
