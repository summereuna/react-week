import styled from "styled-components";

export default function Button({ onClick, children, type }) {
  return (
    <StBtn type={type} onClick={onClick}>
      {children}
    </StBtn>
  );
}

const StBtn = styled.button`
  height: 2.5rem;
  border-radius: 8px;
  border: 1.2px solid transparent;
  min-width: 5rem;
  padding: 0.6rem;
  cursor: pointer;
  outline: none;
  transition: border-color linear 0.25s;

  &:hover,
  &:focus,
  &:focus-visible {
    ${(props) => {
      switch (props.type) {
        case "btn-add":
          return `border-color: rgb(62, 149, 255);
                  background-color: rgb(164, 205, 255);`;

        case "btn-delete":
          return `border-color: rgb(255, 62, 62);
                  background-color: rgb(255, 204, 204);`;

        case "btn-done":
          return `border-color: rgb(72, 255, 62);
                  background-color: rgb(182, 255, 177);`;

        default:
          return `border-color: rgb(62, 149, 255);
                  background-color: rgb(164, 205, 255);`;
      }
    }}
  }
`;
