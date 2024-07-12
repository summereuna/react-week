import * as S from "@styles/components/button.style";
import { CSIconM } from "@styles/components/icon.style";

// type buttonTheme = "btnAdd" | "btnDelete" | "btnDone";

interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  buttonTheme?: "btnAdd" | "btnDelete" | "btnDone";
  buttonShape?: "square" | "circle";
}

export default function Button({
  children,
  icon,
  onClick,
  type = "button",
  buttonTheme = "btnAdd",
  buttonShape = "square",
}: ButtonProps) {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      $buttonTheme={buttonTheme}
      $buttonShape={buttonShape}
    >
      {icon ? <CSIconM>{icon}</CSIconM> : null}
      {children ? <div>{children}</div> : null}
    </S.Button>
  );
}
