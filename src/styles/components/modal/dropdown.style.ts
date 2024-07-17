import styled from "styled-components";

export const DropdownContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownOptionList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.lightGrey};
  min-width: 4.5rem;
  border-radius: 8px;
  cursor: pointer;
`;

export const DropdownItem = styled.div`
  width: 100%;
  padding: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
