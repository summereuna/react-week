import styled, { useTheme } from 'styled-components';

export default function Button({ onClick, children, type }) {
    const { button } = useTheme();

    return (
        <ButtonStyle type={type} onClick={onClick} $buttontype={button}>
            {children}
        </ButtonStyle>
    );
}

const ButtonStyle = styled.button`
    border-radius: 8px;
    border: 1px solid lightgrey;
    min-width: 5rem;
    padding: 0.6rem;
    cursor: pointer;
    transition: border-color linear 0.25s;
    outline: none;

    &:hover,
    &:focus,
    &:focus-visible {
        ${({ type, $buttontype }) => {
            switch (type) {
                case 'btn-add':
                    return $buttontype.btnAdd;
                case 'btn-delete':
                    return $buttontype.btnDelete;
                case 'btn-done':
                    return $buttontype.btnDone;
                default:
                    return $buttontype.btnAdd;
            }
        }}
    }
`;
