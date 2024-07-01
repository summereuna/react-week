import styled from "styled-components";
import GlobalStyle from "@/GlobalStyle.jsx";
import Layout from "@components/Layout";
import Form from "@components/Form";
import CardsContainer from "@components/CardsContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        {/* input 영역 */}
        <StInputContainer>
          <Form />
        </StInputContainer>
        {/* output 영역 */}
        <StOutputContainer>
          {/* Working */}
          <CardsContainer isDone={false} cardsTitle="🔥 Working" />
          {/* Done */}
          <CardsContainer isDone={true} cardsTitle="✅ Done" />
        </StOutputContainer>
      </Layout>
    </>
  );
}

export default App;

const StInputContainer = styled.section`
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

const StOutputContainer = styled.section`
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
