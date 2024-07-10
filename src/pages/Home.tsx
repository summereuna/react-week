import { useAppSelector } from "@/hooks/rtkHooks";
import TodoForm from "@components/Todo/TodoForm";
import TodoList from "@components/Todo/TodoList";
import * as S from "@styles/pages/home.style";

const Home = () => {
  // The `state` arg is correctly typed as `RootState` already!
  const todoList = useAppSelector((state) => state.todos.todoList);

  const doneTodoList = todoList.filter((todo) => todo.isDone);
  const workingTodoList = todoList.filter((todo) => !todo.isDone);

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

export default Home;
