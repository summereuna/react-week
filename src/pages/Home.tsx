import { useNavigate } from "react-router-dom";
import * as S from "@styles/pages/home.style";
import useModal from "@/hooks/useModal";
import ModalPortal from "@components/Modal/ModalPortal";
import ModalLayout from "@components/Modal/ModalLayout";
import ModalAlert from "@components/Modal/ModalAlert";
import Card from "@components/Card";

const Home = () => {
  const navigate = useNavigate();
  const { isVisible, openModal, closeModal } = useModal();

  const handleClick = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return openModal();
    }
  };

  const handleCloseModal = () => {
    closeModal(() => {
      navigate("/login");
    });
  };

  return (
    <S.MainContainer>
      <h1>📝 Todo List</h1>
      <S.AboutContainer>
        <Card
          title={`👀`}
          content={`모든 투두리스트를\n구경해 보세요!`}
          goTo={`보러 가기`}
          path={`/todos`}
          onClick={handleClick}
        />
        <Card
          title={`✍🏻`}
          content={`나만의 투두리스트를\n작성해 보세요!`}
          goTo={`내 페이지 가기`}
          path={`/mypage`}
          onClick={handleClick}
        />
      </S.AboutContainer>

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
