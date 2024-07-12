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

export const Main = styled.main`
  padding: 1rem 0;
`;

export const Logo = styled(Link)`
  color: black;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 7rem;
  justify-content: space-between;
`;
