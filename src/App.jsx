import "@/App.css";
import { useState } from "react";
import Layout from "@components/Layout";
import Input from "@components/Input";
import Button from "@components/Button";
import Card from "@components/Card";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "리액트 공부",
      content: "입문 강의 듣기",
      isDone: true,
    },
    {
      id: 2,
      title: "리액트 공부",
      content: "lv.1 개인 과제 제출",
      isDone: false,
    },
  ]);

  const onAddTodoClick = () => {
    //제목, 내용 있는지 검증
    if (!title.length > 0 || !content.length > 0) {
      return alert("제목과 내용을 모두 입력해 주세요!");
    }

    //id 중복 방지
    const newId =
      todoList.length > 0
        ? Math.max(...todoList.map((todo) => todo.id)) + 1
        : 1;

    const newTodo = { id: newId, title, content, isDone: false };
    setTodoList([...todoList, newTodo]);
    setTitle("");
    setContent("");
  };

  const onDeleteTodoClick = (id) => {
    const newToDoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newToDoList);
  };

  const onDoneClick = (id) => {
    const updateTodo = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(updateTodo);
  };

  return (
    <Layout>
      {/* input 영역 */}
      <div className="input-container">
        <div className="inputs">
          <Input
            onChange={changeTitle}
            value={title}
            label="제목"
            htmlFor="todo-title"
          />
          <Input
            onChange={changeContent}
            value={content}
            label="내용"
            htmlFor="todo-content"
          />
        </div>
        <Button onClick={onAddTodoClick} type="btn-add">
          추가
        </Button>
      </div>
      {/* output 영역 */}
      <div className="output-container">
        {/* Working 영역 */}
        <div>
          <h2 className="cards-title">🔥 Working</h2>
          <div className="cards">
            {todoList
              .filter((todo) => !todo.isDone)
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
        {/* Done 영역 */}
        <div>
          <h2 className="cards-title">✅ Done</h2>
          <div className="cards cards--done">
            {todoList
              .filter((todo) => todo.isDone)
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
      </div>
    </Layout>
  );
}

export default App;
