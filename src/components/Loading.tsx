import * as S from "@styles/components/loading.style";

interface LoadingProps {
  message: string;
}

export default function Loading({ message }: LoadingProps) {
  return (
    <S.LoadingWrapper>
      <S.LoadingIcon>📝</S.LoadingIcon>
      <S.LoadingMessage>{message}</S.LoadingMessage>
      {/* <Indicator>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Indicator> */}
    </S.LoadingWrapper>
  );
}
