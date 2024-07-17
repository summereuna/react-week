import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@components/Button";
import * as S from "@styles/pages/todoDetail.style";
import { useQuery } from "@tanstack/react-query";
import { fetchTodoById } from "@/api/todos";
import formatNewLineText from "@/utils/formatNewLineText";
import Error from "@components/Error";
import Loading from "@components/Loading";
import Comments from "@components/Comments";
import useUser from "@/hooks/useUser";

const TodoDetail = () => {
  const navigate = useNavigate();
  const { id: todoId } = useParams<{ id: string }>();

  const { id: userId } = useUser();

  const {
    data: todo,
    isPending,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["todo", todoId],
    queryFn: () => fetchTodoById(todoId as string),
    enabled: !!todoId, // id가 있을 때만 쿼리를 실행
  });

  const backPage = () => {
    navigate(-1);
  };

  const goToEditPage = () => {
    navigate(`/todos/${todoId}/edit`);
  };
  return (
    <>
      {isPending && (
        <Loading
          message={`상세 페이지를 불러오는 중입니다.\n잠시만 기다려 주새요!`}
        />
      )}
      {(isError || !todo) && (
        <Error
          message={`상세 페이지를 불러오는 중 오류가 발생했습니다.\n다시 시도 해 주세요!`}
        />
      )}
      {isSuccess && (
        <S.DetailWrapper>
          <S.Detail $isDone={todo.isDone ? "done" : "working"}>
            <S.DetailHeader $isDone={todo.isDone ? "done" : "working"}>
              <S.DetailTodoInfo>
                <h3>{todo.title}</h3>
                <span>{todo.userId} 님</span>
              </S.DetailTodoInfo>
              <S.ButtonWrapper>
                {todo.isDone ? null : (
                  <Button onClick={goToEditPage}>수정</Button>
                )}
                <Button onClick={backPage} buttonTheme={`btnDone`}>
                  뒤로가기
                </Button>
              </S.ButtonWrapper>
            </S.DetailHeader>
            <S.DetailTodo>
              <S.DetailTodoContent>
                {formatNewLineText(todo.content)}
              </S.DetailTodoContent>
            </S.DetailTodo>
            <Comments todoId={todoId!} userId={userId} />
          </S.Detail>
        </S.DetailWrapper>
      )}
    </>
  );
};

export default TodoDetail;
