import styled, { css } from "styled-components";

interface ButtonThemeProps {
  $buttonTheme?: "btnAdd" | "btnDelete" | "btnDone";
}

export const Button = styled.button<ButtonThemeProps>`
  border-radius: 8px;
  border: ${({ theme }) => `1px solid ${theme.colors.grey}`};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  min-width: 5rem;
  padding: 0.6rem;
  cursor: pointer;
  transition: border-color linear 0.2s;
  outline: none;

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
};
