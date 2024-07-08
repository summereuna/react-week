import GlobalStyle from "@/GlobalStyle";
import Router from "@shared/Router";
import { ThemeProvider } from "styled-components";
import theme from "@shared/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
