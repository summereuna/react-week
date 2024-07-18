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
    select: (data) => { //서버 엔드포인트로 쿼리 필터 불가능해서 select 사용
      if (data) {
        return data.filter((item: Todo) => item.userId === userId);
      }
      return [];
    },
  });

  return { myTodoList, isPending, isError, isSuccess, userId };
};

export default useUserTodos;
