import * as S from "@styles/components/modal/dropdownLayout.style";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  dropdownPosition?: {
    top: number;
    right: number;
    width: number;
  };
}

export default function DropdownLayout({
  children,
  onClose,
  dropdownPosition,
}: Props) {
  return (
    <>
      <S.StickyBackdrop onClick={onClose} />
      {dropdownPosition && (
        <S.StickyDialog
          onClick={(e) => e.stopPropagation()}
          $top={dropdownPosition.top}
          $right={dropdownPosition.right}
          $width={dropdownPosition.width}
        >
          {children}
        </S.StickyDialog>
      )}
    </>
  );
}
