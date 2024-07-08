import Button from "@components/Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { deleteTodo, updateTodo } from "@redux/modules/todos";

export default function Card({ id, title, content, isDone }) {
  const { colors } = useTheme();

  const dispatch = useDispatch();

  const onDeleteTodoClick = (id) => {
    dispatch(deleteTodo(id));
  };

  const onDoneClick = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <CardStyle id={id} type={`${isDone ? "done" : "working"}`} $colors={colors}>
      <CardContent>
        <Link to={`/${id}`}>
          <StLinkSpan>👉 상세페이지</StLinkSpan>
        </Link>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </CardContent>
      <ButtonGroup>
        <Button
          onClick={() => {
            onDeleteTodoClick(id);
          }}
          type="btn-delete"
        >
          삭제
        </Button>
        <Button
          onClick={() => {
            onDoneClick(id);
          }}
          type={isDone ? "btn-add" : "btn-done"}
        >
          {isDone ? "취소" : "완료"}
        </Button>
      </ButtonGroup>
    </CardStyle>
  );
}

const CardStyle = styled.div`
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
    ${({ type, $colors }) => {
      switch (type) {
        case "done":
          return $colors.green;
        default:
          return $colors.blue;
      }
    }};
`;

const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StLinkSpan = styled.span`
  font-size: small;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0.5rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Content = styled.span`
  padding: 0 0.5rem 1rem 0.5rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonGroup = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
