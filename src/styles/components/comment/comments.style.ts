import styled from "styled-components";

export const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const CommentListWrapper = styled.div`
  margin-bottom: 2rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.div`
  position: relative;
  margin-right: 1rem;
  box-sizing: border-box;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 90%;
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
