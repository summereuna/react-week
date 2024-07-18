import { addTodo } from "@/api/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useCreateTodo = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const {
    mutate: createTodo,
    isPending,
    isError,
  } = useMutation({
    mutationFn: addTodo,
    onSuccess: (todo) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      navigate(`/todos/${todo.id}`);
    },
  });

  return { createTodo, isPending, isError };
};

export default useCreateTodo;
