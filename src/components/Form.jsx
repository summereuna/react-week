import styled from "styled-components";
import Input from "@components/Input";
import Button from "@components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/modules/todos";

export default function Form() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({ title: "", content: "" });

  const changeTitle = (e) => {
    setInput({ ...input, title: e.target.value });
  };

  const changeContent = (e) => {
    setInput({ ...input, content: e.target.value });
  };

  const onAddToDoSubmit = (e) => {
    e.preventDefault(); //리로드 방지

    if (!input.title.trim() || !input.content.trim()) {
      return alert("제목과 내용을 모두 입력해 주세요!");
    }

    dispatch(addTodo(input));

    setInput({ title: "", content: "" });
  };

  return (
    <StForm onSubmit={onAddToDoSubmit}>
      <StInputs>
        <Input
          onChange={changeTitle}
          value={input.title}
          label="제목"
          name="todo-title"
        />
        <Input
          onChange={changeContent}
          value={input.content}
          label="내용"
          name="todo-content"
        />
      </StInputs>
      <Button type="btn-add">추가</Button>
    </StForm>
  );
}

const StForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StInputs = styled.div`
  display: flex;
  flex-direction: row;
`;
