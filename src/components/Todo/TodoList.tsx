import { Todo } from "@/types";
import AllTodoItem from "@components/Todo/AllTodoItme";
import TodoItem from "@components/Todo/TodoItem";
import * as S from "@styles/components/todo/todoList.style";

interface TodoListProps {
  cardsTitle: string;
  todoList: Todo[];
  todoListType: "working" | "done" | "all";
}

export default function TodoList({
  cardsTitle,
  todoList,
  todoListType,
}: TodoListProps) {
  return (
    <div>
      <S.TodoListTitle>{cardsTitle}</S.TodoListTitle>
      <S.TodoListContainer $todoListType={todoListType}>
        {todoList.map((todo) =>
          todoListType === "all" ? (
            <AllTodoItem
              key={todo.id}
              id={todo.id}
              userId={todo.userId}
              title={todo.title}
              content={todo.content}
              isDone={todo.isDone}
            />
          ) : (
            <TodoItem
              key={todo.id}
              id={todo.id}
              userId={todo.userId}
              title={todo.title}
              content={todo.content}
              isDone={todo.isDone}
            />
          )
        )}
      </S.TodoListContainer>
    </div>
  );
}
