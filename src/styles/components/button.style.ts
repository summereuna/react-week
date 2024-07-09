import styled, { css } from "styled-components";

interface ButtonThemeProps {
  $buttonTheme?: "btnAdd" | "btnDelete" | "btnDone";
  $buttonShape?: "square" | "circle";
}

export const Button = styled.button<ButtonThemeProps>`
  border: ${({ theme }) => `1px solid ${theme.colors.grey}`};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 0.6rem;
  cursor: pointer;
  transition: border-color linear 0.2s;
  outline: none;

  ${({ $buttonShape, theme }) =>
    $buttonShape &&
    css`
      border-radius: ${theme.buttonShape[$buttonShape]?.borderRadius};
      min-width: ${theme.buttonShape[$buttonShape]?.minWidth};
    `};

  &:hover,
  &:focus,
  &:focus-visible {
    ${({ $buttonTheme, theme }) =>
      $buttonTheme &&
      css`
        border-color: ${theme.button[$buttonTheme]?.borderColor};
        background-color: ${theme.button[$buttonTheme]?.backgroundColor};
      `}
  }
`;

// 기본 테마를 btnAdd로 설정
Button.defaultProps = {
  $buttonTheme: "btnAdd",
  $buttonShape: "square",
};
