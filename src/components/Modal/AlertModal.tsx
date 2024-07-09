interface AlertModalProps {
  content: React.ReactNode;
}

export default function AlertModal({ content }: AlertModalProps) {
  return <p>{content}</p>;
}
