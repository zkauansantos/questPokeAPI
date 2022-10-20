import { useEffect, useState } from 'react';
import { getPokemonsList, getPokemonsData } from '../../../services/poke-api';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import {ContainerPokemons, ListOfPokemons, CardPokemon, Img, Name} from './styles'
import {ButtonShowMorePokemons} from '../../buttons/button-show-more/index'

const Pokemons = () => {
    const {theme} = useContext(ThemeContext)
    const [pokemons, setPokemons] = useState([])
    const limit= 10
    const [offSet, setOffSet] = useState(10)

    useEffect(() => {
        const fetchData = async () => {
            const pokemonsList = await getPokemonsList(limit, offSet - 10);
            const pokemonsPromises = pokemonsList.results.map((pokemon) => getPokemonsData(pokemon.name))
            const pokemonsData = await Promise.all(pokemonsPromises)

            setPokemons([...pokemonsData])
        }
        fetchData()

    },[ offSet])
    


    const addPokemons = (newPokemons) =>{
        setPokemons([...pokemons, ...newPokemons])
    }

    const PokemonsList = () => {
        return (
            <ContainerPokemons>
            <ListOfPokemons>
                {
                    pokemons.map((index, position) => {
                        return(
                            <CardPokemon theme={theme} key={position}>
                                <Img src={index.sprites.other['official-artwork'].front_default}></Img>
                                <Name>{index.name}</Name>
                            </CardPokemon>
                        )
                    })
                }
            </ListOfPokemons>
            <ButtonShowMorePokemons addPokemons = {addPokemons} setPokemons={setPokemons}/>
        </ContainerPokemons>
        )
    }


    return(
        <PokemonsList/>
    )
}

export {Pokemons}