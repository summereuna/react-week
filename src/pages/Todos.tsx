import TodoList from "@components/Todo/TodoList";
import * as S from "@styles/pages/myPage.style";
import { Wrapper } from "@styles/components/form.style";
import { Todo } from "@/types";
import useAllTodos from "@/hooks/useAllTodos";
import Loading from "@components/Loading";
import Error from "@components/Error";

const Todos = () => {
  const { todoList, isPending, isError, isSuccess } = useAllTodos();

  const workingTodoList = todoList?.filter((todo: Todo) => !todo.isDone);
  const doneTodoList = todoList?.filter((todo: Todo) => todo.isDone);

  return (
    <Wrapper>
      {isPending && <Loading message={`투두 리스트를\n불러오는 중이에요!`} />}
      {isError && (
        <Error
          message={`투두 리스트를 불러 오지 못했습니다!\n다시 한 번 시도해 주세요.`}
        />
      )}
      {isSuccess && (
        <S.MyTodosWrapper>
          <S.MyTodosTitle>{`👀 투두 리스트 모아보기`}</S.MyTodosTitle>

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
        </S.MyTodosWrapper>
      )}
    </Wrapper>
  );
};

export default Todos;
