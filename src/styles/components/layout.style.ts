import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  /* max-width: 1200px; */
  /* min-width: 800px; */
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};

  a {
    color: white;
  }
  a:hover {
    color: yellow;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-end;
    display: none;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Link)`
  color: black;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 7rem;
  justify-content: space-between;
`;
