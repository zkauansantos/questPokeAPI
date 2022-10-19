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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 100px;
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
        transition: 0.2s ease-in-out;
        width: 220px ;
        height: 270px;
    }
`

export {ContainerPokemons, ListOfPokemons, CardPokemon}