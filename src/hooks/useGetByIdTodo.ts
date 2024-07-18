import { fetchTodoById } from "@/api/todos";
import { useQuery } from "@tanstack/react-query";

const useGetByIdTodo = (todoId: string) => {
  const {
    data: todo,
    isPending,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["todo", todoId], // 상세 페이지에서 겟하는 투두 아이디에 해당하는 투두
    queryFn: () => fetchTodoById(todoId),
    enabled: !!todoId, // id가 있을 때만 쿼리를 실행
  });

  return { todo, isPending, isError, isSuccess };
};

export default useGetByIdTodo;
