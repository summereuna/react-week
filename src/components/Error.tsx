import * as S from "@styles/components/error.style";

interface ErrorProps {
  message: string;
}

export default function Error({ message }: ErrorProps) {
  return (
    <S.ErrorWrapper>
      <S.ErrorIcon>😵‍💫</S.ErrorIcon>
      <S.ErrorMessage>{message}</S.ErrorMessage>
    </S.ErrorWrapper>
  );
}
