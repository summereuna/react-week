import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { authLogin } from "@/api/auth";
import { useAppDispatch } from "@/hooks/rtkHooks";
import { login } from "@redux/slices/authSlice";
import Form from "@components/Form";
import useModal from "@/hooks/useModal";
import ModalPortal from "@components/Modal/ModalPortal";
import ModalLayout from "@components/Modal/ModalLayout";
import ModalAlert from "@components/Modal/ModalAlert";
import axios from "axios";
import { setCookie } from "@/utils/cookie";

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

  // const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: authLogin,
    onSuccess: ({ userId, avatar, nickname, accessToken }) => {
      //브라우저 쿠키에 accessToken 저장

      if (accessToken) {
        setCookie("accessToken", accessToken, {
          path: "/",
          secure: true,
          sameSite: "lax",
          maxAge: 3600, //1시간 (s)
          //만료 시간을 UTC 기준으로 표시하기 때문에 KST 보다 -9시간이긴 하지만 기능상 문제는 없음
        });
      }
      //리덕스 전역으로 유저 정보 저장
      const user = { id: userId, avatar, nickname };
      dispatch(login({ user }));
      //상태무효화 상태 refresh
      //이건 필요 없는 것 같기도 하다..
      // queryClient.invalidateQueries({ queryKey: ["authLogin"] });
      //페이지 이동
      navigate("/mypage");
    },
    onError: (error: unknown) => {
      let errorMsg = "오류가 발생했습니다.\n로그인을 다시 시도해 주세요.";
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
      const newLoginUser = {
        id: loginUser.ID,
        password: loginUser.PASSWORD,
      };
      mutate(newLoginUser);
    } catch (error) {
      setAlertContent("오류가 발생했습니다.\n로그인을 다시 시도해 주세요.");
      openModal();
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
        disabled={isPending}
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
