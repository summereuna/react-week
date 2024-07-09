import Button from "@components/Button";
import { xIcon } from "@shared/icons";
import * as S from "@styles/components/modal/modalLayout.style";

interface ModalLayoutProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export default function ModalLayout({ children, onClose }: ModalLayoutProps) {
  return (
    <>
      <S.Backdrop onClick={onClose} />
      <S.Dialog
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <S.DialogButtonWrapper>
          <Button
            icon={xIcon}
            onClick={onClose}
            buttonTheme="btnDelete"
            buttonShape="circle"
          />
        </S.DialogButtonWrapper>
        <S.DialogContentWrapper>{children}</S.DialogContentWrapper>
      </S.Dialog>
    </>
  );
}
