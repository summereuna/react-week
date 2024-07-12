// // import { useAppSelector } from "@/hooks/rtkHooks";
// import TodoForm from "@components/Todo/TodoForm";
// import TodoList from "@components/Todo/TodoList";
// import { TodosState } from "@redux/slices/todosSlice";
// import * as S from "@styles/pages/home.style";

// const TodoApp = ({ todoList }: TodosState) => {
//   // The `state` arg is correctly typed as `RootState` already!
//   // const todoList = useAppSelector((state) => state.todos.todoList);

//   const workingTodoList = todoList.filter((todo) => !todo.isDone);
//   const doneTodoList = todoList.filter((todo) => todo.isDone);

//   return (
//     <>
//       <S.InputAreaWrapper>
//         <TodoForm />
//       </S.InputAreaWrapper>

//       <S.OutputAreaWrapper>
//         <TodoList
//           todoList={workingTodoList}
//           todoListType={"working"}
//           cardsTitle="🔥 Working"
//         />
//         <TodoList
//           todoList={doneTodoList}
//           todoListType={"done"}
//           cardsTitle="✅ Done"
//         />
//       </S.OutputAreaWrapper>
//     </>
//   );
// };

// export default TodoApp;
