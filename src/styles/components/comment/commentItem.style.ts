import styled from "styled-components";

export const UlComments = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const LiComments = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
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

export const TextContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const TextUserId = styled.span`
  font-weight: 500;
`;

export const TextContent = styled.div`
  font-size: small;
  white-space: pre-line;
`;
