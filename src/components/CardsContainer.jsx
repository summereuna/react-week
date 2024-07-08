import Card from "@components/Card";
import styled, { useTheme } from "styled-components";

export default function CardsContainer({ cardsTitle, todoList, type }) {
  const { colors } = useTheme();
  return (
    <div>
      <CardTitle>{cardsTitle}</CardTitle>
      <CardBox type={type} $colors={colors}>
        {todoList.map((todo) => (
          <Card
            key={todo.id}
            id={todo.id}
            title={todo.title}
            content={todo.content}
            isDone={todo.isDone}
          />
        ))}
      </CardBox>
    </div>
  );
}

const CardTitle = styled.h2`
  padding: 0 1rem;
`;

const CardBox = styled.div`
  padding: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 178px;
  gap: 1.4rem;
  background-color: ${({ type, $colors }) => {
    switch (type) {
      case "done":
        return $colors.whiteGreen;
      default:
        return $colors.whiteBlue;
    }
  }};
`;
