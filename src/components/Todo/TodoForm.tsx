import { useEffect, useState } from "react";
import Input from "@components/Input";
import Button from "@components/Button";
import { Todo } from "@/types";
import useUser from "@/hooks/useUser";
import * as S from "@styles/pages/todoAdd.style";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/rtkHooks";
import { clearAlert, setAlert } from "@redux/slices/alertSlice";
import AlertText from "@components/AlertText";

interface TodoFormProps {
  data?: Todo;
  formId: string;
  isPending: boolean;
  isError: boolean;
  onEditTodoClick?: (updatedTodo: Todo) => void;
  onCreateTodo?: (newTodo: Omit<Todo, "id">) => void;
}

export default function TodoForm({
  data,
  formId,
  isPending,
  isError,
  onEditTodoClick,
  onCreateTodo,
}: TodoFormProps) {
  const { id: userId } = useUser();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const alertMessage = useAppSelector((state) => state.alert[formId]);

  const [todo, setTodo] = useState(data ? data : { title: "", content: "" });

  const changeNewTodo = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (alertMessage) {
      dispatch(clearAlert(formId));
    }

    const { name, value } = e.target;

    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //리로드 방지

    if (!todo.title.trim() || !todo.content.trim()) {
      dispatch(
        setAlert({
          formId,
          message: "제목과 내용을 모두 입력해 주세요!",
        })
      );
      return;
    }

    const newTodo: Omit<Todo, "id"> = {
      userId,
      title: todo.title,
      content: todo.content,
      isDone: false,
      comments: [],
    };

    if (!data) {
      //투두 생성
      onCreateTodo?.(newTodo);
    } else {
      //투두 수정
      const updatedTodo: Todo = {
        ...data,
        ...newTodo, // 수정된 부분만
      };
      onEditTodoClick?.(updatedTodo);
    }

    setTodo({ title: "", content: "" });
  };

  useEffect(() => {
    if (data) {
      setTodo(data);
    }
  }, [data]);

  return (
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
              minLength={1}
            />
          </S.InputContainer>
          {isError && (
            <AlertText>{"오류가 발생했습니다. 다시 시도해 주세요!"}</AlertText>
          )}
          <S.ButtonWrapper>
            <Button type="submit" buttonTheme="btnAdd" disabled={isPending}>
              {data ? `수정하기` : `추가하기`}
            </Button>
            <Button
              type="button"
              buttonTheme="btnDelete"
              disabled={isPending}
              onClick={() => navigate(-1)}
            >
              {`취소하기`}
            </Button>
          </S.ButtonWrapper>
        </S.Form>
      </S.TodoFormContainer>
    </S.Wrapper>
  );
}
