import * as S from "@styles/components/button.style";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  buttonTheme?: "btnAdd" | "btnDelete" | "btnDone";
}

export default function Button({
  children,
  onClick,
  type = "button",
  buttonTheme = "btnAdd",
}: ButtonProps) {
  return (
    <S.Button type={type} onClick={onClick} $buttonTheme={buttonTheme}>
      {children}
    </S.Button>
  );
}
