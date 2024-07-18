import useCreateTodo from "@/hooks/useCreateTodo";
import { Todo } from "@/types";
import TodoForm from "@components/Todo/TodoForm";

export default function TodoAdd() {
  const { createTodo, isPending, isError } = useCreateTodo();

  const onCreateTodo = (newTodo: Omit<Todo, "id">) => {
    createTodo(newTodo);
    console.log("투두 추가");
  };

  return (
    <TodoForm
      formId={"addTodoForm"}
      isPending={isPending}
      isError={isError}
      onCreateTodo={onCreateTodo}
    />
  );
}
