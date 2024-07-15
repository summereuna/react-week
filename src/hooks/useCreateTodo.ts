import { addTodo } from "@/api/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: createTodo } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { createTodo };
};

export default useCreateTodo;
