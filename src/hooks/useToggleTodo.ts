import { toggleTodo } from "@/api/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useToggleTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: toggleMutate } = useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { toggleMutate };
};

export default useToggleTodo;
