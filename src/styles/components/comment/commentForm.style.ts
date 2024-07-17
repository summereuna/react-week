import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Avatar = styled.div`
  position: absolute;
  margin-right: 1rem;
  box-sizing: border-box;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const AvatarImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const FormContainer = styled.div`
  margin-left: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  gap: 1rem;
  box-sizing: border-box;

  button {
    max-width: 5rem;
  }
`;

export const TextareaWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Textarea = styled.textarea`
  width: 100%;
  /* height: 7rem; */
  overflow: hidden;
  height: 100%;
  padding: 3rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  resize: none;
  outline: none;
  &:hover,
  &:focus,
  &:focus-visible {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const UserIdText = styled.span`
  position: absolute;
  font-weight: 500;
  font-size: medium;
  left: 1rem;
  top: 1rem;
`;
