import { Container, Div } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import arenaPokemon from '../../assets/imgs/pokemon-arena.jpg'
import styled from "styled-components";

const Main =  () =>{

  const {theme} = useContext(ThemeContext)

  return (
      <Container style={{ backgroundColor: theme.background}}>
        <Div>
        </Div>
      </Container>
  ) 
}




export{Main}