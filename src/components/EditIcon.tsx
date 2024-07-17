import * as S from "@styles/components/edotIcon.style";
import { ellipsis } from "@shared/icons";
import useDropdownPosition from "@/hooks/useDropdownPosition";
import useModal from "@/hooks/useModal";
import ModalPortal from "@components/Modal/ModalPortal";
import DropdownLayout from "@components/Modal/DropdownLayout";
import Dropdown from "@components/Modal/Dropdown";

interface EditIconProps {
  onEditStart: () => void;
}
export default function EditIcon({ onEditStart }: EditIconProps) {
  const { openModal, closeModal, isVisible } = useModal();

  const { dropdownPosition, divRef } = useDropdownPosition(isVisible);

  //모달 열고 난 뒤 수정/삭제 클릭 했을 때 실행 되는 함수
  const handleEditComment = () => {
    console.log("코멘트 수정");
    onEditStart(); //모달 메뉴 중 수정 클럭 시 에디팅 시작
    closeModal(); //그리고 메뉴 모달은 꺼짐
  };

  const handleDeleteComment = () => {
    console.log("코멘트 삭제");
    closeModal();
  };

  return (
    <S.Wrapper>
      <S.EditIcon onClick={openModal} ref={divRef}>
        {ellipsis}
      </S.EditIcon>
      {isVisible && (
        <ModalPortal>
          <DropdownLayout
            onClose={closeModal}
            dropdownPosition={{ ...dropdownPosition }}
          >
            <Dropdown
              onEdit={handleEditComment}
              onDelete={handleDeleteComment}
            />
          </DropdownLayout>
        </ModalPortal>
      )}
    </S.Wrapper>
  );
}
