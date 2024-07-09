import Button from "@components/Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Todo, deleteTodo, toggleTodo } from "@redux/modules/todos";
import * as S from "@styles/components/todoItem.style";

export default function TodoItem({ id, title, content, isDone }: Todo) {
  const dispatch = useDispatch();

  const onDeleteTodoClick = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const onDoneClick = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <S.TodoWrapper
      id={id.toString()} // div 요소의 id 속성은 문자열이어야 함
      $isDone={`${isDone ? "done" : "working"}`}
    >
      <S.TodoContentContainer>
        <Link to={`/${id}`}>
          <S.LinkToDetailPageText>👉 상세페이지</S.LinkToDetailPageText>
        </Link>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
      </S.TodoContentContainer>
      <S.ButtonContainer>
        <Button
          onClick={() => {
            onDeleteTodoClick(id);
          }}
          buttonTheme="btnDelete"
        >
          삭제
        </Button>
        <Button
          onClick={() => {
            onDoneClick(id);
          }}
          buttonTheme={isDone ? "btnAdd" : "btnDone"}
        >
          {isDone ? "취소" : "완료"}
        </Button>
      </S.ButtonContainer>
    </S.TodoWrapper>
  );
}
