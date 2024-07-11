import { useTheme } from "styled-components";
import * as S from "@styles/components/input.style";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  name: string;
}

export default function Input({ onChange, value, label, name }: InputProps) {
  const { colors } = useTheme();

  return (
    <S.InputWrapper>
      <label htmlFor={name}>{label}</label>
      <S.Input
        value={value}
        id={name}
        name={name}
        onChange={(e) => onChange(e)}
        type="text"
        theme={colors}
        autoComplete="off"
      />
    </S.InputWrapper>
  );
}
