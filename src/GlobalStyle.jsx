import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
      color: rgb(62, 149, 255);
      transition: color ease-in-out 0.25s;
    }
    
    a:hover {
      color: blue;
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

export default GlobalStyle;
