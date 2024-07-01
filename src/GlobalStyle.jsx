import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
      font-family: "Helvetica", "Arial", sans-serif;
      line-height: 1.5;
      margin: 0;
      height: 100%;
      color: rgb(81, 81, 81);
      box-sizing: border-box;
    }

    #root {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  `;

export default GlobalStyle;
