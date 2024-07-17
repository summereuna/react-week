import styled from "styled-components";

export const Title = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  padding-bottom: 0.5rem;
  width: 100%;
  display: flex;
`;

export const UlComments = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const LiComments = styled.li`
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
