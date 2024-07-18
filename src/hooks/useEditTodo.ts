import { editTodo } from "@/api/todos";
// import { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useEditTodo = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const {
    mutate: editTodoMutate,
    isPending: isPendingEditTodo,
    isError: isErrorEditTodo,
  } = useMutation({
    mutationFn: editTodo,
    //첫 번째 인자: mutationFn이 반환하는 response.data
    //두 번째 인자: mutationFn의 인자로 보낸 업데이트된 투두 > 쓰면 안전빵..?
    onSuccess: (_, todo) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] }); //전체 투두 리스트
      queryClient.invalidateQueries({ queryKey: ["todo", todo.id] }); // 상세 페이지에서 겟하는 투두 아이디에 해당하는 투두
      navigate(`/todos/${todo.id}`);
    },
  });

  return {
    editTodoMutate,
    isPendingEditTodo,
    isErrorEditTodo,
  };
};

export default useEditTodo;
