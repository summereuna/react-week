import { fetchTodos } from "@/api/todos";
import { Todo } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useUserTodos = (userId: string) => {
  const {
    data: myTodoList,
    isPending,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    select: (data) => {
      if (data) {
        return data.filter((item: Todo) => item.userId === userId);
      }
      return [];
    },
  });

  return { myTodoList, isPending, isError, isSuccess, userId };
};

export default useUserTodos;
