import styled from "styled-components";

export const ErrorWrapper = styled.div`
  height: calc(100vh - 69px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  opacity: 0.85;
  gap: 1rem;
  font-weight: 500;
`;

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  white-space: pre-line; //줄바꿈
`;

export const ErrorIcon = styled.div`
  font-size: 5rem;
  animation: shake 1s infinite;

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-8deg);
    }
    50% {
      transform: rotate(8deg);
    }
    75% {
      transform: rotate(-8deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
