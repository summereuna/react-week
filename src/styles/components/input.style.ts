import styled from "styled-components";

export const InputWrapper = styled.div`
  align-items: center;
  font-weight: 700;
`;
export const Input = styled.input`
  height: 35px;
  width: 200px;
  border-radius: 20px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.whiteBlue};
  margin: 0.5rem;
  padding: 0.5rem;
  margin-right: 1rem;
  outline: none;
  transition: background-color linear 0.25s;

  &:hover,
  &:focus,
  &:focus-visible {
    background-color: ${({ theme }) => theme.lightBlue};
    border-color: ${({ theme }) => theme.blue};
  }
`;
