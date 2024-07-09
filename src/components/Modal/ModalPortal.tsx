import { createPortal } from "react-dom";

interface ModalPortalProps {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: ModalPortalProps) {
  const el = document.getElementById("portal")!;
  return createPortal(children, el);
}
