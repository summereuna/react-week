import { fetchTodos } from "@/api/todos";
import { useQuery } from "@tanstack/react-query";

const useAllTodos = () => {
  const {
    data: todoList,
    isPending,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return { todoList, isPending, isError, isSuccess };
};

export default useAllTodos;

