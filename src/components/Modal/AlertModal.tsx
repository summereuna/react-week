interface AlertModalProps {
  content: React.ReactNode;
  onClose: () => void;
}

export default function AlertModal({ content }: AlertModalProps) {
  return <p>{content}</p>;
}
