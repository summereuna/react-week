import TodoForm from "@components/Todo/TodoForm";
import TodoList from "@components/Todo/TodoList";
import { Wrapper } from "@styles/components/form.style";
import * as S from "@styles/pages/myPage.style";
import { Todo } from "@/types";
import useMyTodos from "@/hooks/useMyTodos";
import Error from "@components/Error";
import Loading from "@components/Loading";

const MyTodos = () => {
  const { myTodoList, isPending, isError, isSuccess, userId } = useMyTodos();

  const workingTodoList = myTodoList?.filter((todo: Todo) => !todo.isDone);
  const doneTodoList = myTodoList?.filter((todo: Todo) => todo.isDone);

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
          <S.MyTodosTitle>{`💬 ${userId}님의 투두 리스트`}</S.MyTodosTitle>
          <S.InputAreaWrapper>
            <TodoForm />
          </S.InputAreaWrapper>
          <S.OutputAreaWrapper>
            <TodoList
              todoList={workingTodoList}
              todoListType={"working"}
              cardsTitle="🔥 해야 할 투두 리스트"
            />
            <TodoList
              todoList={doneTodoList}
              todoListType={"done"}
              cardsTitle="✅ 완료한 투두 리스트"
            />
          </S.OutputAreaWrapper>
        </S.MyTodosWrapper>
      )}
    </Wrapper>
  );
};

export default MyTodos;
