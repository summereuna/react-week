import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "@components/Button";
const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { todoList } = useSelector((state) => {
    return state.todos;
  });

  const todoData = todoList.find((todo) => {
    return todo.id === parseInt(id);
  });

  const backPage = () => {
    navigate(-1);
  };

  return (
    <>
      <DetailContainer type={todoData.isDone ? "isDone" : null}>
        <DetailCard type={todoData.isDone ? "isDone" : null}>
          <CardHeader>
            <span>ID:{todoData.id}</span>
            <Button onClick={backPage}>뒤로가기</Button>
          </CardHeader>
          <CardContent>
            <h3>{todoData.title}</h3>
            <p>{todoData.content}</p>
          </CardContent>
        </DetailCard>
      </DetailContainer>
    </>
  );
};

export default TodoDetail;

const DetailContainer = styled.div`
  max-width: 100%;
  height: 85vh;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    switch (props.type) {
      case "isDone":
        return `rgb(243, 255, 241);`;
      default:
        return `rgb(241, 247, 255);`;
    }
  }};
`;

const DetailCard = styled.div`
  background-color: white;
  margin: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  width: 40rem;
  height: 25rem;
  border-radius: 1rem;
  border: ${(props) => {
    switch (props.type) {
      case "isDone":
        return `1px solid rgb(72, 255, 62);`;
      default:
        return `1px solid rgb(62, 149, 255);`;
    }
  }};
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid lightgrey;
`;

const CardContent = styled.div`
  width: 100%;
  padding: 1rem;
  height: 100%;
`;
