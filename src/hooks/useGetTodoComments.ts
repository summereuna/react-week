import { fetchTodoComments } from "@/api/comments";
import { useQuery } from "@tanstack/react-query";

const useGetTodoComments = (todoId: string) => {
  const {
    data: todoComments,
    isPending,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["comments", todoId],
    queryFn: () => fetchTodoComments(todoId),
    enabled: !!todoId, // id가 있을 때만 쿼리를 실행
  });

  return { todoComments, isPending, isError, isSuccess };
};

export default useGetTodoComments;
