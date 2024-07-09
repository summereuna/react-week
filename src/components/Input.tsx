import { useTheme } from "styled-components";
import * as S from "@styles/components/input.style";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  htmlFor: string;
}

export default function Input({ onChange, value, label, htmlFor }: InputProps) {
  const { colors } = useTheme();

  return (
    <S.InputWrapper>
      <label htmlFor={htmlFor}>{label}</label>
      <S.Input
        value={value}
        id={htmlFor}
        onChange={(e) => onChange(e)}
        type="text"
        theme={colors}
        autoComplete="off"
      />
    </S.InputWrapper>
  );
}
