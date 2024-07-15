import { fetchTodos } from "@/api/todos";
import useUser from "@/hooks/useUser";
import { Todo } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useMyTodos = () => {
  const { id: userId } = useUser();

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

export default useMyTodos;
