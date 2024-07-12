import TodoList from "@components/Todo/TodoList";
import * as S from "@styles/pages/myPage.style";
import { fetchTodos } from "@/api/todos";
import { useQuery } from "@tanstack/react-query";
import { Todo } from "@/types";
import { Wrapper } from "@styles/components/form.style";

const Todos = () => {
  //GET
  const {
    data: todoList,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isPending) {
    return <div>🫠 로딩중...</div>;
  }

  if (isError) {
    return <div>❌ 데이터 조회 중 오류가 발생했습니다!</div>;
  }

  const workingTodoList = todoList.filter((todo: Todo) => !todo.isDone);
  const doneTodoList = todoList.filter((todo: Todo) => todo.isDone);

  return (
    <Wrapper>
      <S.OutputAreaWrapper>
        <TodoList
          todoList={workingTodoList}
          todoListType={"all"}
          cardsTitle="🔥 해야 할 투두 리스트"
        />
        <TodoList
          todoList={doneTodoList}
          todoListType={"all"}
          cardsTitle="✅ 완료한 투두 리스트"
        />
      </S.OutputAreaWrapper>
    </Wrapper>
  );
};

export default Todos;
