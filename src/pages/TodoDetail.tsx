import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@components/Button";
import * as S from "@styles/pages/todoDetail.style";
import { useQuery } from "@tanstack/react-query";
import { fetchTodoById } from "@/api/todos";
import { Todo } from "@/types";

const TodoDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const todoId = id ? id : undefined;

  const {
    data: todo,
    isPending,
    isError,
  } = useQuery<Todo, Error>({
    queryKey: ["todo", todoId],
    queryFn: () => fetchTodoById(todoId as string),
    enabled: !!id, // id가 있을 때만 쿼리를 실행
  });

  if (isPending) return <div>🫠 로딩 중...</div>;
  if (isError || !todo) return <div>❌ 에러 발생!</div>;

  const backPage = () => {
    navigate(-1);
  };

  return (
    <>
      <S.DetailWrapper $isDone={todo.isDone ? "done" : "working"}>
        <S.Detail $isDone={todo.isDone ? "done" : "working"}>
          <S.DetailHeader>
            <span>ID:{todo.id}</span>
            <Button onClick={backPage}>뒤로가기</Button>
          </S.DetailHeader>
          <S.DetailTodo>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
          </S.DetailTodo>
        </S.Detail>
      </S.DetailWrapper>
    </>
  );
};

export default TodoDetail;
