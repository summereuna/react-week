import "@/App.css";

export default function Input({ onChange, value, label, htmlFor }) {
  return (
    <div className="input-info">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        className="input"
        value={value}
        onChange={onChange}
        name={htmlFor}
        type="text"
        required
      />
    </div>
  );
}
