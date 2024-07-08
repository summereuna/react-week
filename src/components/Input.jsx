import styled, { useTheme } from "styled-components";

export default function Input({ onChange, value, label, htmlFor }) {
  const { colors } = useTheme();

  return (
    <StInputInfo>
      <label htmlFor={htmlFor}>{label}</label>
      <StInput
        className="input"
        value={value}
        onChange={onChange}
        name={htmlFor}
        type="text"
        theme={colors}
      />
    </StInputInfo>
  );
}

const StInputInfo = styled.div`
  align-items: center;
  font-weight: 700;
`;
const StInput = styled.input`
  height: 35px;
  width: 200px;
  border-radius: 20px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.whiteBlue};
  margin: 0.5rem;
  padding: 0.5rem;
  margin-right: 1rem;
  outline: none;
  transition: background-color linear 0.25s;

  &:hover,
  &:focus,
  &:focus-visible {
    background-color: ${({ theme }) => theme.lightBlue};
    border-color: ${({ theme }) => theme.blue};
  }
`;
