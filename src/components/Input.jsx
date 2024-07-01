import styled from "styled-components";

export default function Input({ onChange, value, label, name }) {
  return (
    <StInputInfo>
      <label htmlFor={name}>{label}</label>
      <StInput value={value} onChange={onChange} name={name} type="text" />
    </StInputInfo>
  );
}

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
