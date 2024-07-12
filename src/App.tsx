import Router from "@shared/Router";
import { GlobalStyle } from "@styles/global-style";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
