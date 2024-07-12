import * as S from "@styles/components/modal/modalAlret.style";

interface ModalAlertProps {
  content: React.ReactNode;
  onClose: () => void;
}

export default function ModalAlert({ content }: ModalAlertProps) {
  return <S.DialogContentWrapper>{content}</S.DialogContentWrapper>;
}
