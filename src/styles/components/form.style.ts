import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginFormContainer = styled.div`
  margin: 3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  max-width: 460px;
  min-width: 460px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 12px;
`;

export const AuthForm = styled.form`
  display: grid;
  gap: 30px;
  margin: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  :nth-child(1) {
    border-radius: 8px 8px 0 0;
  }
  :nth-last-child(1) {
    border-top: none;
    border-radius: 0 0 8px 8px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;

  button {
    font-size: medium;
    height: 60px;
    margin-bottom: 1rem;
  }

  span {
    font-size: small;
  }
`;
