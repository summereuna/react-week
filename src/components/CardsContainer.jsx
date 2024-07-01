import styled from "styled-components";
import Card from "@components/Card";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "@/redux/modules/todos";

export default function CardsContainer({ cardsTitle, isDone }) {
  const { todoList } = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  const onDeleteTodoClick = (id) => {
    dispatch(deleteTodo(id));
  };

  const onDoneClick = (id) => {
    dispatch(updateTodo(id));
  };
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
