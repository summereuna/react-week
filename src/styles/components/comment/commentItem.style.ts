import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 4rem;
  width: 100%;
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
