import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 3px;
  height: 13rem;
  width: 13rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 12px;
  transition: transform 0.8s;

  &:hover {
    transform: translate(0, -10px);
    background-color: ${({ theme }) => theme.colors.whiteBlue};
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const CardTitle = styled.div`
  font-size: 2.5rem;
`;

export const CardContent = styled.div`
  white-space: pre-line; //줄바꿈
  line-height: "1";
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  transition: background-color 0.25s;
  padding: 0.3rem 0.3rem 0.3rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: white;
  }
`;

export const Icon = styled.div`
  width: 1rem;
  height: 1rem;
`;

export const Text = styled.div`
  display: flex;
  font-size: small;
`;
