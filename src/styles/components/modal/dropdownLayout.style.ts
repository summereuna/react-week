import styled from "styled-components";

export const StickyBackdrop = styled.div`
  inset: 0px;
  position: fixed;
  z-index: 10;
`;

interface StickyDialogProps {
  $top: number;
  $right: number;
  $width: number;
}

export const StickyDialog = styled.div<StickyDialogProps>`
  position: absolute;
  z-index: 20;
  border-radius: 12px;
  top: ${({ $top }) => $top}px;
  right: calc(${({ $right }) => $right}px + 2.3rem);
  width: ${({ $width }) => $width}px;
`;

export const StickyDialogNonePortal = styled.div`
  position: absolute;
  z-index: 20;
  border-radius: 12px;
  top: 100%;
`;
