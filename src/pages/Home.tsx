import Button from "@components/Button";
import { useNavigate } from "react-router-dom";
import { rightIcon } from "@shared/icons";
import * as S from "@styles/pages/home.style";
import useModal from "@/hooks/useModal";
import ModalPortal from "@components/Modal/ModalPortal";
import ModalLayout from "@components/Modal/ModalLayout";
import ModalAlert from "@components/Modal/ModalAlert";
const Home = () => {
  const navigate = useNavigate();
  const { isVisible, openModal, closeModal } = useModal();

  const handleClick = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      openModal();
    } else {
      return navigate("/mypage");
    }
  };

  const handleCloseModal = () => {
    closeModal(() => {
      navigate("/login");
    });
  };

  return (
    <S.MainContainer>
      <h2>📝 Todo List</h2>
      <S.AboutText>
        나만의
        <br />
        투두리스트를 작성해 보세요!
      </S.AboutText>
      <Button onClick={handleClick} icon={rightIcon}>
        내 페이지 가기
      </Button>

      {isVisible && (
        <ModalPortal>
          <ModalLayout onClose={handleCloseModal}>
            <ModalAlert
              onClose={handleCloseModal}
              content={`로그인이 필요합니다!`}
            />
          </ModalLayout>
        </ModalPortal>
      )}
    </S.MainContainer>
  );
};

export default Home;
