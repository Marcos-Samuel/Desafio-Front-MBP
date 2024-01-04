import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { UserProvider } from "./contexts/UserContext";

import Home from "./page/home";

export default function App() {



  return (
    <UserProvider>
    <ThemeProvider theme={defaultTheme}>
        
    <Home />
        
    < GlobalStyle/>
    </ThemeProvider>
    </UserProvider>
  )
}
