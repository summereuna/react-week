import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%; //나중에 플레서블하게 바꾸기.....✅
  input {
    height: 45px;
    margin-right: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 20%;
  button {
    height: 45px;
  }
`;
