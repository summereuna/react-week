import styled from "styled-components";

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
  /* width: %; */

  /* justify-content: flex-end; */
  button {
    /* width: 100%; */
    height: 45px;
  }
`;
