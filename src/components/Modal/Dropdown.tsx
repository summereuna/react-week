import * as S from "@styles/components/modal/dropdown.style";

interface DropdownProps {
  onDelete: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onEdit: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function Dropdown({ onDelete, onEdit }: DropdownProps) {
  return (
    <>
      <S.DropdownContentWrapper>
        <S.DropdownOptionList>
          <S.DropdownItem onClick={onEdit}>수정</S.DropdownItem>
          <S.DropdownItem onClick={onDelete}>삭제</S.DropdownItem>
        </S.DropdownOptionList>
      </S.DropdownContentWrapper>
    </>
  );
}
