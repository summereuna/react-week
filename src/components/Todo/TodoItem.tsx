import Button from "@components/Button";
import { Link } from "react-router-dom";
import { deleteTodo, toggleTodo } from "@redux/modules/todosSlice";
import type { Todo } from "@redux/modules/todosSlice";
import * as S from "@styles/components/todo/todoItem.style";
import { rightIcon } from "@shared/icons";
import { CSIconS } from "@styles/components/icon.style";
import { useAppDispatch } from "@/hooks/rtkHooks";

export default function TodoItem({ id, title, content, isDone }: Todo) {
  const dispatch = useAppDispatch();

  const onDeleteTodoClick = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const onDoneClick = (id: string) => {
    dispatch(toggleTodo(id));
  };

  return (
    <S.TodoWrapper
      id={id.toString()} // div 요소의 id 속성은 문자열이어야 함
      $isDone={`${isDone ? "done" : "working"}`}
    >
      <S.TodoContentContainer>
        <Link to={`/${id}`}>
          <S.LinkToDetailPageText>
            <CSIconS>{rightIcon}</CSIconS>
            <span>상세페이지</span>
          </S.LinkToDetailPageText>
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
