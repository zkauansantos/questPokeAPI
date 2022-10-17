import { Container } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

const Main =  () =>{

  const {theme} = useContext(ThemeContext)

  return (
      <Container style={{ backgroundColor: theme}}>
      </Container>
  ) 
}



export{Main}