import { editComment } from "@/api/comments";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditComment = () => {
  const queryClient = useQueryClient();

  const { mutate: editMutate } = useMutation({
    mutationFn: editComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] }); // 댓글 수정 > 댓글 하나만 겟하는게 없으므로 전체 리스트
    },
  });

  return { editMutate };
};

export default useEditComment;
