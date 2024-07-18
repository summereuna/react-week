import useEditTodo from "@/hooks/useEditTodo";
import useGetByIdTodo from "@/hooks/useGetByIdTodo";
import { Todo } from "@/types";
import Error from "@components/Error";
import Loading from "@components/Loading";
import TodoForm from "@components/Todo/TodoForm";
import { useNavigate, useParams } from "react-router-dom";

export default function TodoEdit() {
  const { id } = useParams<{ id: string }>();
  const { editMutate } = useEditTodo();
  const navigate = useNavigate();

  const { todo, isPending, isError, isSuccess } = useGetByIdTodo(id!);

  const onEditTodoClick = (updatedTodo: Todo) => {
    editMutate(updatedTodo);
    if (!isPending) {
      navigate("/mypage");
    }
  };

  return (
    <>
      {isPending && <Loading message={`잠시만 기다려 주세요!`} />}
      {isError && (
        <Error
          message={`투두 수정 중 오류가 발생했습니다.\n다시 시도해 주세요!`}
        />
      )}
      {isSuccess && <TodoForm data={todo} onEditTodoClick={onEditTodoClick} />}
    </>
  );
}
