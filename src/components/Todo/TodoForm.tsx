import { useState } from "react";
import Input from "@components/Input";
import Button from "@components/Button";
import * as S from "@styles/components/todo/todoForm.style";
import useModal from "@/hooks/useModal";
import ModalPortal from "@components/Modal/ModalPortal";
import ModalLayout from "@components/Modal/ModalLayout";
import ModalAlert from "@components/Modal/ModalAlert";
// import { useAppDispatch, useAppSelector } from "@/hooks/rtkHooks";
// import { v4 as uuidv4 } from "uuid";
import { Todo } from "@/types";
import useUser from "@/hooks/useUser";
import useCreateTodo from "@/hooks/useCreateTodo";

type ErrorParamsType = {
  title: string;
  content: string;
};

export default function TodoForm() {
  const { createTodo } = useCreateTodo();

  const { id: userId } = useUser();
  const { isVisible, openModal, closeModal } = useModal();
  const [todo, setTodo] = useState({ title: "", content: "" });

  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  // const { data: validationData } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: fetchTodos,
  //   select: (data) => {
  //     if (data) {
  //       return data.filter(
  //         (item: Todo) =>
  //           item.title === todo.title && item.content === todo.content
  //       );
  //     }
  //     return [];
  //   },
  // });

  // 에러 메시지 발생 함수
  const getErrorMsg = (errorCode: string, params: ErrorParamsType): string => {
    switch (errorCode) {
      case "01":
        return `[필수 입력 값 검증 실패 안내]\n
        제목과 내용은 모두 입력돼야 합니다. 입력값을 확인해주세요.\n
        [입력된 값]
        제목 : ${params.title}
        내용 : ${params.content}`;
      // case "02":
      //   return `[내용 중복 안내]\n
      //   입력하신 제목(${params.title}) 및 내용(${params.content})과 일치하는 TODO가
      //   이미 TODO LIST에 등록되어 있습니다.\n
      //   기 등록한 TODO ITEM의 수정을 원하시면
      //   해당 아이템의 [상세보기]-[수정]을 이용해주세요.`;
      default:
        return `시스템 내부 오류가 발생하였습니다.`;
    }
  };

  const [alertContent, setAlertContent] = useState("");

  const onAddTodoClick = (e: React.FormEvent) => {
    e.preventDefault(); //리로드 방지

    // 제목과 내용이 모두 존재해야만 정상처리(하나라도 없는 경우 오류 발생)
    // "01" : 필수 입력값 검증 실패 안내
    if (!todo.title.trim() || !todo.content.trim()) {
      const errorMsg = getErrorMsg("01", {
        title: todo.title,
        content: todo.content,
      });
      setAlertContent(errorMsg);
      openModal();
      return;
    }

    // 이미 존재하는 todo 항목이면 오류
    // // "02" : 내용 중복 안내
    // if (validationData!.length > 0) {
    //   const errorMsg = getErrorMsg("02", {
    //     title: todo.title,
    //     content: todo.content,
    //   });
    //   setAlertContent(errorMsg);
    //   openModal();
    //   return;
    // }

    const newTodo: Omit<Todo, "id"> = {
      userId,
      title: todo.title,
      content: todo.content,
      isDone: false,
    };

    createTodo(newTodo);

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
        <S.ButtonWrapper>
          <Button type="submit" buttonTheme="btnAdd">
            추가
          </Button>
        </S.ButtonWrapper>
      </S.Form>

      {isVisible && (
        <ModalPortal>
          <ModalLayout onClose={closeModal}>
            <ModalAlert onClose={closeModal} content={alertContent} />
          </ModalLayout>
        </ModalPortal>
      )}
    </>
  );
}
