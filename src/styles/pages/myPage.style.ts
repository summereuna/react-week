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
export const ButtonWrpper = styled.div`
  padding-left: 1rem;
  margin-top: 1rem;
`;

export const ProfileAreaWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  border: 1px solid ${({ theme }) => `${theme.colors.blue}`};
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
export const Avatar = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${({ theme }) => `${theme.colors.grey}`};
  border-radius: 50%;
`;

export const OutputAreaWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
