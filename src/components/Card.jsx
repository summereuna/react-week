import "@/App.css";
import Button from "@components/Button";

export default function Card({
  id,
  title,
  content,
  isDone,
  onDeleteTodoClick,
  onDoneClick,
}) {
  return (
    <div id={id} className={`card ${isDone ? "card--done" : null}`}>
      <div className="card-content">
        <h3 className="todo-title">{title}</h3>
        <span className="todo-content">{content}</span>
      </div>
      <div className="card-buttons">
        <Button onClick={onDeleteTodoClick} type="btn-delete">
          삭제
        </Button>
        <Button onClick={onDoneClick} type={isDone ? "btn-add" : "btn-done"}>
          {isDone ? "취소" : "완료"}
        </Button>
      </div>
    </div>
  );
}
