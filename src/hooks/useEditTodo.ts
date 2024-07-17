import { editTodo } from "@/api/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: editMutate } = useMutation({
    mutationFn: editTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { editMutate };
};

export default useEditTodo;
