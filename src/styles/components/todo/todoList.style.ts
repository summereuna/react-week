import styled from "styled-components";

interface TodoListContainer {
  $todoListType: "working" | "done";
}

export const TodoListTitle = styled.h2`
  padding: 0 1rem;
`;

export const TodoListContainer = styled.div<TodoListContainer>`
  padding: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 178px;
  gap: 1.4rem;
  background-color: ${({ $todoListType, theme }) => {
    switch ($todoListType) {
      case "working":
        return theme.colors.whiteBlue;
      case "done":
        return theme.colors.whiteGreen;
      default:
        return theme.colors.whiteBlue;
    }
  }};
`;
