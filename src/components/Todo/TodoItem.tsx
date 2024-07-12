import Button from "@components/Button";
import { Link } from "react-router-dom";
import * as S from "@styles/components/todo/todoItem.style";
import { rightIcon } from "@shared/icons";
import { CSIconS } from "@styles/components/icon.style";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, toggleTodo } from "@/api/todos";
import { Todo } from "@/types";

export default function TodoItem({ id, title, content, isDone }: Todo) {
  const queryClient = useQueryClient();

  // DELETE
  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  // UPDATE
  const { mutate: toggleMutate } = useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const onDeleteTodoClick = (id: string) => {
    deleteMutate(id);
  };

  const onToggleClick = (id: string) => {
    toggleMutate(id);
  };

  console.log("✅ 현재 투두 아이디", typeof id);

  return (
    <S.TodoWrapper
      id={id} // div 요소의 id 속성은 문자열이어야 함 > 걍 다 문자열로 통일 ^^~~ 혹시 나중에 서버 바꿔서 uuid 쓸거 생각하면
      $isDone={`${isDone ? "done" : "working"}`}
    >
      <S.TodoContentContainer>
        <Link to={`/mypage/${id}`}>
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
