import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@components/Button";
import * as S from "@styles/pages/todoDetail.style";
import { useAppSelector } from "@/hooks/rtkHooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodoById } from "@redux/modules/todosSlice";

const TodoDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const todo = useAppSelector((state) => state.todos.todo); //리스트 말고 딱 투두만 가져와서

  // const todo = todoList.find((todo) => {
  //   return todo.id === id;
  // });

  const backPage = () => {
    navigate(-1);
  };
  useEffect(() => {
    dispatch(getTodoById(id!));
  }, [dispatch, id]);

  return (
    <>
      <S.DetailWrapper $isDone={todo?.isDone ? "done" : "working"}>
        <S.Detail $isDone={todo?.isDone ? "done" : "working"}>
          <S.DetailHeader>
            <span>ID:{todo?.id}</span>
            <Button onClick={backPage}>뒤로가기</Button>
          </S.DetailHeader>
          <S.DetailTodo>
            <h3>{todo?.title}</h3>
            <p>{todo?.content}</p>
          </S.DetailTodo>
        </S.Detail>
      </S.DetailWrapper>
    </>
  );
};

export default TodoDetail;
