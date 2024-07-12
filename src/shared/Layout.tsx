import { useAppDispatch, useAppSelector } from "@/hooks/rtkHooks";
import Button from "@components/Button";
// import useModal from "@/hooks/useModal";
// import ModalAlert from "@components/Modal/ModalAlert";
// import ModalLayout from "@components/Modal/ModalLayout";
// import ModalPortal from "@components/Modal/ModalPortal";
import { RootState } from "@redux/config/configStore";
import { logout } from "@redux/slices/authSlice";
import * as S from "@styles/components/layout.style";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  const dispatch = useAppDispatch();

  // const { isVisible, openModal, closeModal } = useModal();
  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <S.Layout>
      <S.Header className="header">
        <S.Logo to="/">📝 Todo List</S.Logo>
        {isLoggedIn ? (
          <Button onClick={handleLogout}>로그아웃</Button>
        ) : (
          <S.ButtonContainer>
            <S.Logo to="/login">로그인</S.Logo>
            <S.Logo to="/signup">회원가입</S.Logo>
          </S.ButtonContainer>
        )}
      </S.Header>
      <S.Main className="main">{children}</S.Main>

      {/* {isVisible && (
        <ModalPortal>
          <ModalLayout onClose={closeModal}>
            <ModalAlert onClose={closeModal} content={alertContent} />
          </ModalLayout>
        </ModalPortal>
      )} */}
    </S.Layout>
  );
}
