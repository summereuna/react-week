import { useAppDispatch } from "@/hooks/rtkHooks";
import useAuth from "@/hooks/useAuth";
import Button from "@components/Button";
import { logout } from "@redux/slices/authSlice";
import { burgerIcon } from "@shared/icons";
import * as S from "@styles/components/layout.style";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const isLoggedIn = useAuth();
  const dispatch = useAppDispatch();

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
        <S.LinkContainer>
          <S.Logo to="/todos">모아보기</S.Logo>
          <S.Logo to="/todos/add">투두 쓰기</S.Logo>
          <S.Logo to="/mypage">내 페이지</S.Logo>

          {isLoggedIn ? (
            <Button onClick={handleLogout}>로그아웃</Button>
          ) : (
            <S.ButtonContainer>
              <S.Logo to="/login">로그인</S.Logo>
              <S.Logo to="/signup">회원가입</S.Logo>
            </S.ButtonContainer>
          )}
        </S.LinkContainer>
        <Menubar>{burgerIcon}</Menubar>
      </S.Header>
      <S.Main className="main">{children}</S.Main>
    </S.Layout>
  );
}

const Menubar = styled.div`
  position: relative;
  display: block; //자식이랑 상호작용되게 자기 크기만큼만 width되도록 설정해야함
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;
