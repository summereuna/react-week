import styled from "styled-components";

export const Input = styled.input`
  font-size: medium;
  height: 60px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.whiteBlue};
  padding: 1rem;
  outline: none;
  transition: border linear 0.25s;

  &:hover,
  &:focus,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.lightBlue};
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;
