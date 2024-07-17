import { deleteComment } from "@/api/comments";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteCommentMutate } = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return { deleteCommentMutate };
};

export default useDeleteComment;
