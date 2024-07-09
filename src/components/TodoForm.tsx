import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@redux/modules/todos";
import Input from "@components/Input";
import Button from "@components/Button";
import * as S from "@styles/components/todoForm.style";

export default function TodoForm() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({ title: "", content: "" });

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, title: e.target.value });
  };

  const changeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, content: e.target.value });
  };

  const onAddTodoClick = (e: FormEvent) => {
    e.preventDefault(); //리로드 방지

    if (!input.title.trim() || !input.content.trim()) {
      return alert("제목과 내용을 모두 입력해 주세요!");
    }

    dispatch(addTodo(input));
    setInput({ title: "", content: "" });
  };

  return (
    <S.Form onSubmit={onAddTodoClick}>
      <S.InputContainer>
        <Input
          onChange={changeTitle}
          value={input.title}
          label="제목"
          htmlFor="todo-title"
        />
        <Input
          onChange={changeContent}
          value={input.content}
          label="내용"
          htmlFor="todo-content"
        />
      </S.InputContainer>
      <Button type="submit" buttonTheme="btnAdd">
        추가
      </Button>
    </S.Form>
  );
}
