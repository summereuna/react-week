import * as S from "@styles/components/button.style";
import { CSIconM } from "@styles/components/icon.style";

// type buttonTheme = "btnAdd" | "btnDelete" | "btnDone";

interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  buttonTheme?: "btnAdd" | "btnDelete" | "btnDone";
  buttonShape?: "square" | "circle";
  buttonSize?: "s" | "m" | "lg";
}

export default function Button({
  children,
  icon,
  onClick,
  disabled = false,
  type = "button",
  buttonTheme = "btnAdd",
  buttonShape = "square",
  buttonSize = "s",
}: ButtonProps) {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      $buttonTheme={buttonTheme}
      $buttonShape={buttonShape}
      $buttonSize={buttonSize}
    >
      {icon ? <CSIconM>{icon}</CSIconM> : null}
      {children ? <div>{children}</div> : null}
    </S.Button>
  );
}
