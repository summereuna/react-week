import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <StLayout>
      <StHeader>
        <span>My Todo List</span>
        <span>React</span>
      </StHeader>
      <StMain>{children}</StMain>
    </StLayout>
  );
}

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100%;
`;

const StHeader = styled.header`
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StMain = styled.main`
  padding: 1rem 0;
`;
