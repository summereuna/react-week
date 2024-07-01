import styled from "styled-components";

const StCardsTitle = styled.h2`
  padding: 1rem;
  font-size: x-large;
  font-weight: 500;
`;

const StCards = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 178px;
  background-color: ${(props) => {
    switch (props.type) {
      case "cards--done":
        return `rgb(243, 255, 241);`;
      default:
        return `rgb(241, 247, 255);`;
    }
  }};
`;

import Card from "@components/Card";

export default function CardsContainer({
  todoList,
  isDone,
  cardsTitle,
  onDeleteTodoClick,
  onDoneClick,
}) {
  return (
    <div>
      <StCardsTitle>{cardsTitle}</StCardsTitle>
      <StCards type={`${isDone ? "cards--done" : null}`}>
        {todoList
          .filter((todo) => (isDone ? todo.isDone : !todo.isDone))
          .map((todo) => (
            <Card
              key={todo.id}
              id={todo.id}
              title={todo.title}
              content={todo.content}
              isDone={todo.isDone}
              onDeleteTodoClick={() => {
                onDeleteTodoClick(todo.id);
              }}
              onDoneClick={() => {
                onDoneClick(todo.id);
              }}
            />
          ))}
      </StCards>
    </div>
  );
}
