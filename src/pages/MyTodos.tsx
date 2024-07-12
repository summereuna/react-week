import TodoForm from "@components/Todo/TodoForm";
import TodoList from "@components/Todo/TodoList";
import * as S from "@styles/pages/myPage.style";
import { fetchTodos } from "@/api/todos";
import { useQuery } from "@tanstack/react-query";
import { Todo } from "@/types";

const MyTodos = () => {
  //GET
  const {
    data: todoList,
    isPending,
    isError,
  } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isPending) {
    return <div>🫠 로딩중...</div>;
  }

  if (isError) {
    return <div>❌ 데이터 조회 중 오류가 발생했습니다!</div>;
  }

  //isLoading보다 아래 있어야 오류 안남
  const workingTodoList = todoList.filter((todo: Todo) => !todo.isDone);
  const doneTodoList = todoList.filter((todo: Todo) => todo.isDone);

  return (
    <>
      <S.InputAreaWrapper>
        <TodoForm />
      </S.InputAreaWrapper>

      <S.OutputAreaWrapper>
        <TodoList
          todoList={workingTodoList}
          todoListType={"working"}
          cardsTitle="🔥 Working"
        />
        <TodoList
          todoList={doneTodoList}
          todoListType={"done"}
          cardsTitle="✅ Done"
        />
      </S.OutputAreaWrapper>
    </>
  );
};

export default MyTodos;
