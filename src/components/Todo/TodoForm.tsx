import { useEffect, useState } from "react";
import Input from "@components/Input";
import Button from "@components/Button";
import useModal from "@/hooks/useModal";
import ModalPortal from "@components/Modal/ModalPortal";
import ModalLayout from "@components/Modal/ModalLayout";
import ModalAlert from "@components/Modal/ModalAlert";
import { Todo } from "@/types";
import useUser from "@/hooks/useUser";
import useCreateTodo from "@/hooks/useCreateTodo";
import * as S from "@styles/pages/todoAdd.style";
import { useNavigate } from "react-router-dom";

type ErrorParamsType = {
  title: string;
  content: string;
};

interface TodoFormProps {
  data?: Todo;
  onEditTodoClick?: (updatedTodo: Todo) => void;
}

export default function TodoForm({ data, onEditTodoClick }: TodoFormProps) {
  const navigate = useNavigate();
  const { isVisible, openModal, closeModal } = useModal();
  const { id: userId } = useUser();

  const { createTodo, isPending } = useCreateTodo();
  const [todo, setTodo] = useState(data ? data : { title: "", content: "" });

  useEffect(() => {
    if (data) {
      setTodo(data);
    }
  }, [data]);

  const changeNewTodo = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setTodo({
      ...todo,
      [name]: value,
    });
  };

  // 에러 메시지 발생 함수
  const getErrorMsg = (errorCode: string, params: ErrorParamsType): string => {
    switch (errorCode) {
      case "01":
        return `[필수 입력 값 검증 실패 안내]\n
        제목과 내용은 모두 입력돼야 합니다. 입력값을 확인해주세요.\n
        [입력된 값]
        제목 : ${params.title}
        내용 : ${params.content}`;
      default:
        return `시스템 내부 오류가 발생하였습니다.`;
    }
  };

  const [alertContent, setAlertContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
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

    const newTodo: Omit<Todo, "id"> = {
      userId,
      title: todo.title,
      content: todo.content,
      isDone: false,
    };

    if (data) {
      const updatedTodo: Todo = {
        ...data,
        ...newTodo,
      };
      onEditTodoClick?.(updatedTodo);
    } else {
      createTodo(newTodo);
    }

    setTodo({ title: "", content: "" });

    if (!isPending) {
      navigate("/mypage");
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.TodoFormContainer>
          <h2>{data ? `투두 수정하기` : `투두 추가하기`}</h2>
          <S.Form onSubmit={handleSubmit}>
            <S.InputContainer>
              <Input
                onChange={changeNewTodo}
                value={todo.title}
                label="제목을 입력해주세요. (50자 이내)"
                name="title"
                maxLength={50}
              />
              <S.TextArea
                onChange={changeNewTodo}
                value={todo.content}
                placeholder="내용을 입력해 주세요. (200자 이내)"
                name="content"
                maxLength={200}
              />
            </S.InputContainer>
            <S.ButtonWrapper>
              <Button type="submit" buttonTheme="btnAdd">
                {data ? `수정하기` : `추가하기`}
              </Button>
            </S.ButtonWrapper>
          </S.Form>
        </S.TodoFormContainer>
      </S.Wrapper>

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
