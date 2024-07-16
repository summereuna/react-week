import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@components/Button";
import * as S from "@styles/pages/todoDetail.style";
import { useQuery } from "@tanstack/react-query";
import { fetchTodoById } from "@/api/todos";
import formatNewLineText from "@/utils/formatNewLineText";
// import useUser from "@/hooks/useUser";

const TodoDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const todoId = id ? id : undefined;

  // const { id: userId } = useUser();

  const {
    data: todo,
    isPending,
    isError,
  } = useQuery({
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
            <S.DetailTodoInfo>
              <span>작성자: {todo.userId} 님</span>
              <span>id:{todo.id}</span>
            </S.DetailTodoInfo>
            <S.ButtonWrapper>
              <Button onClick={backPage}>뒤로가기</Button>
            </S.ButtonWrapper>
          </S.DetailHeader>
          <S.DetailTodo>
            <h3>{todo.title}</h3>
            <S.DetailTodoContent>
              {formatNewLineText(todo.content)}
            </S.DetailTodoContent>
          </S.DetailTodo>
        </S.Detail>
      </S.DetailWrapper>
    </>
  );
};

export default TodoDetail;
