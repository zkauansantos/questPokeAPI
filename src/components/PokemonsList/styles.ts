import styled from 'styled-components';
import arenaPokemon from '../../assets/imgs/pokemon-arena.jpg';

export const Container = styled.main`
  background-color: ${({theme}) => theme.backgroundMain};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BattleArena = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 650px;
  padding: 20px;
  background: url(${arenaPokemon})  center;
  background-size: cover;
  width: 85%;
  border-radius: 3%;
`;

export const ContainerSearchs = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 40px;

  input {
    width: 200px;
    height: 40px;
    border-radius: 8px;
    padding-left: 8px;
    border: ${({theme}) => theme.borderCardAndButton};
    outline: none;
    -webkit-box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
    -moz-box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
    box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
  }

  select {
    width: 200px;
    height: 40px;
    border-radius: 8px;
    padding-left: 8px;
    border: ${({theme}) => theme.borderCardAndButton};
    outline: none;
    -webkit-box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
    -moz-box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
    box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100px;
}
`;

export const ContainerPokemons = styled.div`
  display: grid;
  place-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const ListOfPokemons = styled.ul`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, auto);
  justify-content: space-evenly;
  margin-bottom: 50px;

  @media screen and (max-width: 1220px) {
    grid-template-columns: repeat(4, auto);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, auto);
  }

  @media screen and (max-width: 769px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const CardPokemon = styled.li`
  -webkit-box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
  -moz-box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
  box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
  color: ${({theme}) => theme.cardColor};
  background-color: ${({theme}) => theme.backgroundMain};
  border: ${({theme}) => theme.borderCardAndButton};
  margin-top: 20px;
  border-radius: 5%;
  margin: 10px 10px;
  width: 180px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: 0.1s ease-in-out;
  }

  img {
    width: 90%;
  }

  span {
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;