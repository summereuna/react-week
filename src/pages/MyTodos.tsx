import TodoForm from "@components/Todo/TodoForm";
import TodoList from "@components/Todo/TodoList";
import { Wrapper } from "@styles/components/form.style";
import * as S from "@styles/pages/myPage.style";
import { fetchTodos } from "@/api/todos";
import { useQuery } from "@tanstack/react-query";
import { Todo } from "@/types";
import useUser from "@/hooks/useUser";
import styled from "styled-components";

const MyTodos = () => {
  const { id } = useUser();

  const {
    data: myTodoList,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    select: (data) => {
      if (data) {
        return data.filter((item: Todo) => item.userId === id);
      }
      return [];
    },
  });

  if (isPending) {
    return <div>🫠 로딩중...</div>;
  }

  if (isError) {
    return <div>❌ 데이터 조회 중 오류가 발생했습니다!</div>;
  }

  //isLoading보다 아래 있어야 오류 안남
  const workingTodoList = myTodoList.filter((todo: Todo) => !todo.isDone);
  const doneTodoList = myTodoList.filter((todo: Todo) => todo.isDone);

  return (
    <Wrapper>
      <S.MyTodosWrapper>
        <S.MyTodosTitle>{`💬 ${id}님의 투두 리스트`}</S.MyTodosTitle>
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
      </S.MyTodosWrapper>
    </Wrapper>
  );
};

export default MyTodos;
