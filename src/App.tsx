import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/globalStyles";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
