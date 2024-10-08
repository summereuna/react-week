import { Link } from "react-router-dom";
import Input from "@components/Input";
import Button from "@components/Button";
import * as S from "@styles/components/form.style";
import AlertText from "@components/AlertText";

interface FormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  isPending: boolean;
  id: string;
  pw: string;
  isRegister: boolean;
  alertMessage?: string;
}

export default function Form({
  onChange,
  onSubmit,
  isPending,
  id,
  pw,
  isRegister,
  alertMessage,
}: FormProps) {
  return (
    <S.Wrapper>
      <S.LoginFormContainer>
        <h2>{isRegister ? `회원가입` : `로그인`}</h2>
        <S.AuthForm onSubmit={(e) => onSubmit(e)}>
          <S.InputContainer>
            <Input
              type="text"
              value={id}
              label="아이디"
              name="ID"
              onChange={(e) => onChange(e)}
            />
            <Input
              type="password"
              value={pw}
              label="비밀번호"
              name="PASSWORD"
              onChange={(e) => onChange(e)}
            />
          </S.InputContainer>
          <AlertText>{alertMessage}</AlertText>
          <S.ButtonContainer>
            <Button type="submit" buttonSize="lg" disabled={isPending}>
              {isRegister ? `회원가입` : `로그인`}
            </Button>
            {isRegister ? (
              <Link to={`/login`}>
                <span>로그인</span>
              </Link>
            ) : (
              <Link to={`/signup`}>
                <span>회원가입</span>
              </Link>
            )}
          </S.ButtonContainer>
        </S.AuthForm>
      </S.LoginFormContainer>
    </S.Wrapper>
  );
}
