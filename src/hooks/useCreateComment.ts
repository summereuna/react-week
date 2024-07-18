import { addComment } from "@/api/comments";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateComment = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createComment,
    isPending,
    isError,
  } = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      // 변이 성공 시 캐시 무효화로 투두 목록 데이터 갱신!
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return { createComment, isPending, isError };
};

export default useCreateComment;
