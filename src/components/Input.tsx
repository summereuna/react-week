import * as S from "@styles/components/input.style";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  name: string;
  type?: string;
  maxLength?: number;
}

export default function Input({
  onChange,
  value,
  label,
  name,
  type = "text",
  maxLength = 20,
}: InputProps) {
  return (
    <S.Input
      value={value}
      id={name}
      name={name}
      onChange={(e) => onChange(e)}
      type={type}
      placeholder={label}
      autoComplete="off"
      maxLength={maxLength}
    />
  );
}
