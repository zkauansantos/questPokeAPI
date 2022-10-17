import styled from "styled-components";
import arenaPokemon from '../../assets/imgs/pokemon-arena.jpg'

const Container = styled.main`
display: flex;
justify-content: center;
min-height: 800px;
opacity: 0.5;
`

const Div = styled.div`
background: url(${arenaPokemon}) no-repeat center; 
background-size: cover;
width: 80%;
border-radius: 3%;
`

export {Container, Div}