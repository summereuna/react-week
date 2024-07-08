import styled from "styled-components";
import Form from "@components/Form";
import CardsContainer from "@components/CardsContainer";
import { useSelector } from "react-redux";

const Home = () => {
  const { todoList } = useSelector((state) => {
    return state.todos;
  });

  const doneTodoList = todoList.filter((todo) => todo.isDone);
  const workingTodoList = todoList.filter((todo) => !todo.isDone);

  return (
    <>
      {/* input 영역 */}
      <InputContainer>
        <Form />
      </InputContainer>
      {/* output 영역 */}
      <OutputContainer>
        {/* Working 영역 */}
        <CardsContainer
          todoList={workingTodoList}
          type={"working"}
          cardsTitle="🔥 Working"
        />
        {/* Done 영역 */}
        <CardsContainer
          todoList={doneTodoList}
          type={"done"}
          cardsTitle="✅ Done"
        />
      </OutputContainer>
    </>
  );
};

export default Home;

const InputContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  border: 1px solid rgb(62, 149, 255);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OutputContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
