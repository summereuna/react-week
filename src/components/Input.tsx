import { useTheme } from "styled-components";
import * as S from "@styles/components/input.style";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  name: string;
  type?: string;
}

export default function Input({
  onChange,
  value,
  label,
  name,
  type = "text",
}: InputProps) {
  const { colors } = useTheme();

  return (
    <S.Input
      value={value}
      id={name}
      name={name}
      onChange={(e) => onChange(e)}
      type={type}
      theme={colors}
      placeholder={label}
      autoComplete="off"
    />
  );
}
