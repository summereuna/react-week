import { addComment } from "@/api/comments";
import { Comment } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateComment = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createComment,
    isPending,
    isError,
  } = useMutation({
    mutationFn: addComment,
    onMutate: async (newComment: Omit<Comment, "id">) => {
      // 낙관적 업데이트 전에 사용자 목록 쿼리를 취소해 잠재적인 충돌 방지!
      await queryClient.cancelQueries({ queryKey: ["comments"] });

      // 캐시된 데이터(투두 목록) 가져오기!
      const previousComments = queryClient.getQueryData<Comment[]>([
        "comments",
      ]);

      // 임시 id 생성
      const tempId = Date.now().toString();

      // 낙관적 업데이트
      if (previousComments) {
        queryClient.setQueryData<Comment[]>(
          ["comments"],
          [...previousComments, { ...newComment, id: tempId }]
        );
      }

      // 각 콜백의 context로 전달할 데이터 반환!
      return { previousComments };
    },
    onSuccess: () => {
      // 변이 성공 시 캐시 무효화로 투두 목록 데이터 갱신!
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: (error, newComment, context) => {
      console.log("onError", error, newComment);
      // 변이 실패 시, 낙관적 업데이트 결과를 이전 투두 목록으로 되돌리기!
      if (context) {
        queryClient.setQueryData(["comments"], context.previousComments);
      }
    },
  });

  return { createComment, isPending, isError };
};

export default useCreateComment;
