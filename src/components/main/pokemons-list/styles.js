import styled from 'styled-components';

const ContainerPokemons = styled.div`

    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 35px;
`


const ListOfPokemons = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  justify-content: space-evenly;
  margin-bottom: 150px;
`

const CardPokemon = styled.li`
    -webkit-box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
    -moz-box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
    box-shadow: 0px 0px 31px 10px rgba(0,0,0,0.45);
    color: ${({theme}) => theme.cardColor};
    background-color: ${({theme}) => theme.backgroundMain};
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
    text-transform: uppercase;
    font-weight: bold;
`



export {ContainerPokemons, ListOfPokemons, CardPokemon, Img, Name}