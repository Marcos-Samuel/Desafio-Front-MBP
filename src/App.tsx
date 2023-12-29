import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import Card from "./components/card/card";
import { Container, ContainerCard } from "./styles";


export default function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>

        <ContainerCard>
         
            <h3>Primeiro</h3>
           
       
          <Card />
          <Card />
          <Card />
          <Card />
         
        </ContainerCard>
      
        <ContainerCard>
        <Card />
        <Card />
        <Card />
        <Card/>
        </ContainerCard>
        
        <ContainerCard>
        <Card />
        <Card />
        <Card />
        <Card/>
        </ContainerCard>
       
        <ContainerCard>
        <Card />
        <Card />
        <Card />
        <Card/>
        </ContainerCard>
     
     </Container>
    
      <GlobalStyle />
    </ThemeProvider>
  )
}


