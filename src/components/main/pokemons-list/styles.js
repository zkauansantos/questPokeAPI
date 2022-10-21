import styled from 'styled-components';

const ContainerPokemons = styled.div`
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 35px;
`


const ListOfPokemons = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 20px;
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
`

const CardPokemon = styled.li`
    -webkit-box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
    -moz-box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
    box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
    color: ${({theme}) => theme.cardColor};
    background-color: ${({theme}) => theme.backgroundMain};
    border: ${({theme}) => theme.borderCardAndButton};
    margin-top: 20px;
    border-radius: 5%;
    width: 180px;
    height: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: 0.1s ease-in-out;
    }
`

const Img = styled.img`
    width: 90%; 
    display: block;
`

const Name = styled.p`
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: bold;
`



export {ContainerPokemons, ListOfPokemons, CardPokemon, Img, Name}