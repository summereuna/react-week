import styled from "styled-components";

interface DoneProps {
  $isDone?: "done" | "working";
}

export const DetailWrapper = styled.div<DoneProps>`
  max-height: 100%;
  height: calc(100vh - 69px);
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isDone, theme }) => {
    switch ($isDone) {
      case "working":
        return theme.colors.whiteBlue;
      case "done":
        return theme.colors.whiteGreen;
      default:
        return theme.colors.whiteBlue;
    }
  }};
`;

export const Detail = styled.div<DoneProps>`
  background-color: white;
  margin: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  width: 40rem;
  min-height: 25rem;
  border-radius: 1rem;
  border: ${({ $isDone, theme }) => {
    switch ($isDone) {
      case "done":
        return `1px solid ${theme.colors.green}`;
      default:
        return `1px solid ${theme.colors.blue}`;
    }
  }};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  button {
    height: 45px;
  }
`;

export const DetailHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid lightgrey;
`;

export const DetailTodoInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: small;
`;

export const DetailTodo = styled.div`
  width: 100%;
  padding: 1rem;
  height: 100%;
`;

export const DetailTodoContent = styled.div`
  white-space: pre-line;
`;
