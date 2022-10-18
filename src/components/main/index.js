import { Container, Div } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { Pokemons } from "./pokemons-list";

const Main =  () =>{

  const {theme} = useContext(ThemeContext)

  return (
    <Container theme={theme}>
        <Div>
          <Pokemons/>
        </Div>
      </Container>
  ) 
}




export{Main}