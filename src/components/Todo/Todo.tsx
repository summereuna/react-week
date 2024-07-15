import Button from "@components/Button";
import { Link } from "react-router-dom";
import * as S from "@styles/components/todo/todoItem.style";
import { rightIcon } from "@shared/icons";
import { CSIconS } from "@styles/components/icon.style";
import useUser from "@/hooks/useUser";
import { Todo as TodoType } from "@/types";
import useDeleteTodo from "@/hooks/useDeleteTodo";
import useToggleTodo from "@/hooks/useToggleTodo";

export default function Todo({ id, userId, title, content, isDone }: TodoType) {
  const { id: authUserId } = useUser();
  const { deleteMutate } = useDeleteTodo();
  const { toggleMutate } = useToggleTodo();

  const onDeleteTodoClick = (id: string) => {
    if (userId !== authUserId) return;
    deleteMutate(id);
  };
  const onToggleClick = (id: string) => {
    if (userId !== authUserId) return;
    toggleMutate(id);
  };

  return (
    <S.TodoWrapper
      id={id} // 문자열
      $isDone={`${isDone ? "done" : "working"}`}
    >
      <S.TodoContentContainer>
        <Link to={`/todos/${id}`}>
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
            onToggleClick(id);
          }}
          buttonTheme={isDone ? "btnAdd" : "btnDone"}
        >
          {isDone ? "취소" : "완료"}
        </Button>
      </S.ButtonContainer>
    </S.TodoWrapper>
  );
}
