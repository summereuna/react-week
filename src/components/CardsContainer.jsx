import "@/App.css";
import Card from "@components/Card";

export default function CardsContainer({
  todoList,
  isDone,
  cardsTitle,
  onDeleteTodoClick,
  onDoneClick,
}) {
  return (
    <div>
      <h2 className="cards-title">{cardsTitle}</h2>
      <div className={`cards ${isDone ? null : "cards--done"}`}>
        {todoList
          .filter((todo) => (isDone ? todo.isDone : !todo.isDone))
          .map((todo) => (
            <Card
              key={todo.id}
              id={todo.id}
              title={todo.title}
              content={todo.content}
              isDone={todo.isDone}
              onDeleteTodoClick={() => {
                onDeleteTodoClick(todo.id);
              }}
              onDoneClick={() => {
                onDoneClick(todo.id);
              }}
            />
          ))}
      </div>
    </div>
  );
}
