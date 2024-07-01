import styled from "styled-components";

const StInputInfo = styled.div`
  align-items: center;
  font-weight: 700;
`;
const StInput = styled.input`
  height: 25px;
  width: 200px;
  border-radius: 20px;
  border: 1px solid transparent;
  background-color: rgb(229, 241, 255);
  margin: 0.5rem;
  padding: 0.3rem 0.5rem;
  margin-right: 1rem;
  outline: none;
  transition: background-color linear 0.25s;

  &:hover,
  &:focus,
  &:focus-visible {
    background-color: rgb(164, 205, 255);
  }
`;

export default function Input({ onChange, value, label, htmlFor }) {
  return (
    <StInputInfo>
      <label htmlFor={htmlFor}>{label}</label>
      <StInput
        value={value}
        onChange={onChange}
        name={htmlFor}
        type="text"
        required
      />
    </StInputInfo>
  );
}
