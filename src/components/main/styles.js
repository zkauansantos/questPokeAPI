import styled from "styled-components";
import arenaPokemon from '../../assets/imgs/pokemon-arena.jpg'

const Container = styled.main`
background-color: ${({theme}) => theme.backgroundMain};
display: flex;
justify-content: center;
min-height: auto;
`

const Div = styled.div`
display: flex;
justify-content: center;
padding: 20px;
background: url(${arenaPokemon})  center; 
background-size: cover;
width: 85%;
border-radius: 3%;
`

export {Container, Div}