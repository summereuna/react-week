import styled from "styled-components";

export const LoadingWrapper = styled.div`
  height: calc(100vh - 69px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  opacity: 0.85;
  gap: 2rem;
  font-weight: 500;
`;

export const LoadingMessage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  white-space: pre-line; //줄바꿈
`;

export const LoadingIcon = styled.div`
  font-size: 5rem;
  animation: bounce 1s infinite;

  @keyframes bounce {
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

// export const Indicator = styled.div`
//   box-sizing: border-box;
//   display: inline-block;
//   position: relative;
//   width: 80px;
//   height: 80px;
//   div {
//     position: absolute;
//     width: 16px;
//     height: 16px;
//     border-radius: 50%;
//     background: ${({ theme }) => theme.colors.blue};
//     animation: lds-grid 1.2s linear infinite;
//   }
//   div:nth-child(1) {
//     top: 8px;
//     left: 8px;
//     animation-delay: 0s;
//   }
//   div:nth-child(2) {
//     top: 8px;
//     left: 32px;
//     animation-delay: -0.4s;
//   }
//   div:nth-child(3) {
//     top: 8px;
//     left: 56px;
//     animation-delay: -0.8s;
//   }
//   div:nth-child(4) {
//     top: 32px;
//     left: 8px;
//     animation-delay: -0.4s;
//   }
//   div:nth-child(5) {
//     top: 32px;
//     left: 32px;
//     animation-delay: -0.8s;
//   }
//   div:nth-child(6) {
//     top: 32px;
//     left: 56px;
//     animation-delay: -1.2s;
//   }
//   div:nth-child(7) {
//     top: 56px;
//     left: 8px;
//     animation-delay: -0.8s;
//   }
//   div:nth-child(8) {
//     top: 56px;
//     left: 32px;
//     animation-delay: -1.2s;
//   }
//   div:nth-child(9) {
//     top: 56px;
//     left: 56px;
//     animation-delay: -1.6s;
//   }
//   @keyframes lds-grid {
//     0%,
//     100% {
//       opacity: 1;
//     }
//     50% {
//       opacity: 0.5;
//     }
//   }
// `;
