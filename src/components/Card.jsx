import styled from "styled-components";

const StCard = styled.div`
  background-color: white;
  margin: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
  height: 8rem;
  white-space: normal;
  border-radius: 1rem;
  border: ${(props) => {
    switch (props.type) {
      case "card--done":
        return `1px solid rgb(72, 255, 62);`;

      default:
        return `1px solid rgb(62, 149, 255);`;
    }
  }};
`;

const StCardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StTodoTitle = styled.h3`
  margin: 0;
  padding: 0.5rem;
  font-weight: 700;
  font-size: large;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StTodoContent = styled.span`
  padding: 0.5rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StCardButtons = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

import Button from "@components/Button";

export default function Card({
  id,
  title,
  content,
  isDone,
  onDeleteTodoClick,
  onDoneClick,
}) {
  return (
    <StCard id={id} type={`${isDone ? "card--done" : null}`}>
      <StCardContent>
        <StTodoTitle>{title}</StTodoTitle>
        <StTodoContent>{content}</StTodoContent>
      </StCardContent>
      <StCardButtons>
        <Button onClick={onDeleteTodoClick} type="btn-delete">
          삭제
        </Button>
        <Button onClick={onDoneClick} type={isDone ? "btn-add" : "btn-done"}>
          {isDone ? "취소" : "완료"}
        </Button>
      </StCardButtons>
    </StCard>
  );
}
