import * as S from "@styles/components/edotIcon.style";
import { ellipsis } from "@shared/icons";
import useDropdownPosition from "@/hooks/useDropdownPosition";
import useModal from "@/hooks/useModal";
import ModalPortal from "@components/Modal/ModalPortal";
import DropdownLayout from "@components/Modal/DropdownLayout";
import Dropdown from "@components/Modal/Dropdown";

export default function EditIcon() {
  const { openModal, closeModal, isVisible } = useModal();

  const { dropdownPosition, divRef } = useDropdownPosition(isVisible);

  const handleEditComment = () => {
    console.log("코멘트 수정");
    closeModal();
  };

  const handleDeleteComment = () => {
    console.log("코멘트 삭제");
    closeModal();
  };

  return (
    <>
      <S.EditIcon
        onClick={() => {
          openModal();
        }}
        ref={divRef}
      >
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
    </>
  );
}
