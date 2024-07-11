import { useState } from "react";
import { addTodo } from "@redux/slices/todosSlice";
import Input from "@components/Input";
import Button from "@components/Button";
import * as S from "@styles/components/todo/todoForm.style";
import useModal from "@/hooks/useModal";
import ModalPortal from "@components/Modal/ModalPortal";
import ModalLayout from "@components/Modal/ModalLayout";
import AlertModal from "@components/Modal/AlertModal";
import { useAppDispatch } from "@/hooks/rtkHooks";

export default function TodoForm() {
  const { isVisible, openModal, closeModal } = useModal();
  const dispatch = useAppDispatch();

  const [todo, setTodo] = useState({ title: "", content: "" });

  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const onAddTodoClick = (e: React.FormEvent) => {
    e.preventDefault(); //리로드 방지

    if (!todo.title.trim() || !todo.content.trim()) {
      return openModal();
    }

    dispatch(addTodo(todo));
    setTodo({ title: "", content: "" });
  };

  return (
    <>
      <S.Form onSubmit={onAddTodoClick}>
        <S.InputContainer>
          <Input
            onChange={changeTodo}
            value={todo.title}
            label="제목"
            name="title"
          />
          <Input
            onChange={changeTodo}
            value={todo.content}
            label="내용"
            name="content"
          />
        </S.InputContainer>
        <Button type="submit" buttonTheme="btnAdd">
          추가
        </Button>
      </S.Form>

      {isVisible && (
        <ModalPortal>
          <ModalLayout onClose={closeModal}>
            <AlertModal
              onClose={closeModal}
              content="제목과 내용을 모두 입력하세요!"
            />
          </ModalLayout>
        </ModalPortal>
      )}
    </>
  );
}
