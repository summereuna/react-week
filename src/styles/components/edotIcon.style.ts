import styled from "styled-components";

export const EditIcon = styled.div`
  position: relative;
  right: 0;
  width: 1.2rem;
  height: 1.2rem;
  color: grey;
  border-radius: 50%;
  transition: background-color 0.25s;
  cursor: pointer;

  &:hover,
  &:focus,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
