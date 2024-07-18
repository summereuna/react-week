import { fetchTodoComments } from "@/api/comments";
import { useQuery } from "@tanstack/react-query";

const useGetTodoComments = (todoId: string) => {
  const {
    data: todoComments,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["comments", todoId], //댓글 리스트, 하나의 투두가 가지는 댓글 리스트인 경우
    queryFn: () => fetchTodoComments(todoId),
    enabled: !!todoId, // id가 있을 때만 쿼리를 실행
  });

  return { todoComments, isPending, isError };
};

export default useGetTodoComments;
