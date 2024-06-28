import "@/App.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <span>My Todo List</span>
        <span>React</span>
      </header>
      <main className="main">{children}</main>
    </div>
  );
}
