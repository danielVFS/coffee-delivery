import { ThemeProvider } from "styled-components";
import { CoffeesContextProvider } from "./contexts/CoffeesContext";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/globalStyles";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CoffeesContextProvider>
        <Router />
      </CoffeesContextProvider>
    </ThemeProvider>
  );
}

export default App;
