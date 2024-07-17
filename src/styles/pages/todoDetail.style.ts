import styled from "styled-components";

interface DoneProps {
  $isDone?: "done" | "working";
}

export const DetailWrapper = styled.div`
  max-height: 100%;
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Detail = styled.div<DoneProps>`
  background-color: white;
  margin: 0.5rem;
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
        return `1px solid ${theme.colors.lightGreen}`;
      default:
        return `1px solid ${theme.colors.lightBlue}`;
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

export const DetailHeader = styled.div<DoneProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
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

  h3 {
    font-size: x-large;
  }
`;

export const DetailTodoInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: small;
`;

export const DetailTodo = styled.div`
  width: 100%;
  padding: 2rem;
  min-height: 10rem;
  height: 100%;
`;

export const DetailTodoContent = styled.div`
  white-space: pre-line;
`;
