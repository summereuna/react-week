import "@/App.css";

export default function Button({ onClick, children, type }) {
  return (
    <button className={type} onClick={onClick}>
      {children}
    </button>
  );
}
