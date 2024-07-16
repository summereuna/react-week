import styled from "styled-components";

export const MyTodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 69px);
  padding: 2rem;
`;

export const MyTodosTitle = styled.div`
  font-size: x-large;
  font-weight: 600;
  padding-left: 1rem;
`;

// export const InputAreaWrapper = styled.div`
//   padding: 1rem;
//   margin: 1rem;
//   background-color: white;
//   border: ${({ theme }) => `1px solid ${theme.colors.blue}`};
//   border-radius: 10px;
//   /* display: flex; */
//   /* flex-wrap: wrap; */
//   /* flex-direction: row; */
//   /* justify-content: space-between; */
//   /* align-items: center; */
// `;

export const OutputAreaWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
