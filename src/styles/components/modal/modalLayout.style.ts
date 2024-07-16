import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.8;
  background-color: rgb(221, 221, 221);
  z-index: 10;
`;

export const Dialog = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 90%;
  max-width: 460px;
  height: 250px;
  display: flex;
  flex-direction: column;
  z-index: 20;
`;
export const DialogButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DialogContentWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;
