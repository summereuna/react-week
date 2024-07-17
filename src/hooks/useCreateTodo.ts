import { addTodo } from "@/api/todos";
import { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: createTodo, isPending } = useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodo: Omit<Todo, "id">) => {
      // 낙관적 업데이트 전에 사용자 목록 쿼리를 취소해 잠재적인 충돌 방지!
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      // 캐시된 데이터(투두 목록) 가져오기!
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]);

      // 임시 id 생성
      const tempId = Date.now().toString();

      // 낙관적 업데이트
      if (previousTodos) {
        queryClient.setQueryData<Todo[]>(
          ["todos"],
          [...previousTodos, { ...newTodo, id: tempId }]
        );
      }

      // 각 콜백의 context로 전달할 데이터 반환!
      return { previousTodos };
    },
    onSuccess: () => {
      // 변이 성공 시 캐시 무효화로 투두 목록 데이터 갱신!
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error, newTodo, context) => {
      console.log("onError", error, newTodo);
      //✅ 에러 뿜는 걸로 바꾸기
      // 변이 실패 시, 낙관적 업데이트 결과를 이전 투두 목록으로 되돌리기!
      if (context) {
        queryClient.setQueryData(["todos"], context.previousTodos);
      }
    },
  });

  return { createTodo, isPending };
};

export default useCreateTodo;
