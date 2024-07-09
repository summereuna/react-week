import TodoItem from "@components/Todo/TodoItem";
import { Todo } from "@redux/modules/todos";
import * as S from "@styles/components/todo/todoList.style";

interface TodoListProps {
  cardsTitle: string;
  todoList: Todo[];
  todoListType: "working" | "done";
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
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            content={todo.content}
            isDone={todo.isDone}
          />
        ))}
      </S.TodoListContainer>
    </div>
  );
}
