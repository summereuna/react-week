import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@components/Button";
import * as S from "@styles/pages/todoDetail.style";
import { useAppSelector } from "@/hooks/rtkHooks";

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const todoList = useAppSelector((state) => state.todos.todoList);

  const todoData = todoList.find((todo) => {
    return todo.id === id;
  });

  const backPage = () => {
    navigate(-1);
  };

  return (
    <>
      <S.DetailWrapper $isDone={todoData?.isDone ? "done" : "working"}>
        <S.Detail $isDone={todoData?.isDone ? "done" : "working"}>
          <S.DetailHeader>
            <span>ID:{todoData?.id}</span>
            <Button onClick={backPage}>뒤로가기</Button>
          </S.DetailHeader>
          <S.DetailTodo>
            <h3>{todoData?.title}</h3>
            <p>{todoData?.content}</p>
          </S.DetailTodo>
        </S.Detail>
      </S.DetailWrapper>
    </>
  );
};

export default TodoDetail;
