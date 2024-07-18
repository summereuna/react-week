import * as S from "@styles/components/alertText.style";

interface AlertTextProps {
  children: React.ReactNode;
}

export default function AlertText({ children }: AlertTextProps) {
  return <S.Text>{children}</S.Text>;
}
