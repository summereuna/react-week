import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 69px);
`;

export const TodoFormContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  width: 100%;
  max-width: 460px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 12px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-sizing: border-box;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 1rem;

  width: 100%;

  input {
    height: 45px;
    width: 100%;
    max-width: 450px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;

  /* justify-content: flex-end; */
  button {
    /* width: 100%; */
    height: 45px;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  font-size: medium;
  height: 10rem;
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
