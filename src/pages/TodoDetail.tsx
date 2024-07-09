import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@components/Button";
import * as S from "@styles/pages/todoDetail.style";
import { RootState } from "@redux/modules";

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const todos = useSelector((state: RootState) => state.todos);

  const todoData = todos.find((todo) => {
    return todo.id === parseInt(id!);
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
