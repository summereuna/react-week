import styled from "styled-components";

interface TodoWrapper {
  $isDone: "done" | "working";
}

export const TodoWrapper = styled.div<TodoWrapper>`
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 17rem;
  white-space: normal;
  border-radius: 1rem;
  border: 1px solid
    ${({ $isDone, theme }) => {
      switch ($isDone) {
        case "working":
          return theme.colors.blue;
        case "done":
          return theme.colors.green;
        default:
          return theme.colors.blue;
      }
    }};
`;

export const TodoContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LinkToDetailPageText = styled.span`
  font-size: small;
  display: flex;
  align-items: center;
`;

export const UserName = styled.span`
  font-size: small;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0.5rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Content = styled.span`
  padding: 0 0.5rem 1rem 0.5rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;
