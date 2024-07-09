import TodoForm from "@components/Todo/TodoForm";
import TodoList from "@components/Todo/TodoList";
import { RootState } from "@redux/modules";
import * as S from "@styles/pages/home.style";
import { useSelector } from "react-redux";

const Home = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const doneTodoList = todos.filter((todo) => todo.isDone);
  const workingTodoList = todos.filter((todo) => !todo.isDone);

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
