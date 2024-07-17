import { fetchTodoById } from "@/api/todos";
import { useQuery } from "@tanstack/react-query";

const useGetByIdTodo = (todoId: string) => {
  const {
    data: todo,
    isPending,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["todos", todoId],
    queryFn: async ({ queryKey }) => {
      const [, todoId] = queryKey;
      return await fetchTodoById(todoId);
    },
    enabled: !!todoId, // id가 있을 때만 쿼리를 실행
  });

  return { todo, isPending, isError, isSuccess };
};

export default useGetByIdTodo;
