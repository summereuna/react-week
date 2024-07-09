import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.blue};
      transition: color linear 0.25s;
    }
    
    a:hover {
      color:${({ theme }) => theme.colors.darkBlue};
    }
    
    body {
      font-family: "Helvetica", "Arial", sans-serif;
      line-height: 1.5;
      margin: 0;
      height: 100%;
      color: rgb(81, 81, 81);
    }

    #root {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  `;
