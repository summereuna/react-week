import styled from "styled-components";

export const MyTodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyTodosTitle = styled.div`
  font-size: x-large;
  font-weight: 600;
  margin-top: 2rem;
`;

export const InputAreaWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  border: 1px solid rgb(62, 149, 255);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
`;

export const OutputAreaWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
`;
