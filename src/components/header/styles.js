import styled from 'styled-components';
import logo from "../../assets/imgs/pokemon-logo.png";
import pokebola from '../../assets/imgs/pokebola-logo.png'
import pikachu from '../../assets/imgs/pikachu-logo.png'

const Container = styled.header`
    align-items: center;
    height: 250px;
    display: flex;
    justify-content: space-between;
    background-color: #ccc;
`

const Pikachu = styled.div`
    background: url(${pikachu}) no-repeat center;
    background-size: 160px;
    height: 200px;
    width: 100%;

`


const Pokebola = styled.div`
    background: url(${pokebola}) no-repeat center;
    background-size: 130px;
    height: 200px;
    width: 100%;
`



const Logo = styled.h1`
  position: absolute;
  color: transparent;
  height: 200px;
  width: 100%;
  background: url(${logo}) no-repeat center;
  transition: transform 500ms ease-in-out ;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }
`;

export {Logo, Container, Pokebola, Pikachu}