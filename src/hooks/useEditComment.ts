import { editComment } from "@/api/comments";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditComment = () => {
  const queryClient = useQueryClient();

  const { mutate: editMutate } = useMutation({
    mutationFn: editComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return { editMutate };
};

export default useEditComment;
