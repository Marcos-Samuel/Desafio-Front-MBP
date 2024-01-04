import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



&:focus {
    outline: none;
    opacity: 1;
  }

body {
  background-color: ${props => props.theme["background-color"]};
  color: ${props => props.theme["white-100"]};
  -webkit-font-soothing: antialiased;
}


body, input, textarea, button {
  font: 400 1rem Montserrat, sans-serif;
}
`

