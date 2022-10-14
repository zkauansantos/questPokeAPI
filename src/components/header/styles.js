import styled from 'styled-components';
import logo from "../../assets/imgs/pokemon-logo.png";
import pokebola from '../../assets/imgs/pokebola-logo.png'

const Container = styled.header`
    align-items: center;
    height: 250px;
    display: flex;
    justify-content: space-between;
    background-color:#1b263b;
`

const Pokebola = styled.div`
    border-radius: 100%;
    background: url(${pokebola}) no-repeat center;
    background-size: 150px;
    height: 200px;
    width: 100%;
`


const Logo = styled.h1`
  color: transparent;
  height: 200px;
  width: 100%;
  background: url(${logo}) no-repeat center;
  transition: transform 500ms ease-in-out ;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export {Logo, Container, Pokebola}