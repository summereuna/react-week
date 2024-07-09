import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100%;
`;

export const Header = styled.header`
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.main`
  padding: 1rem 0;
`;

export const Logo = styled(Link)`
  color: black;
`;
