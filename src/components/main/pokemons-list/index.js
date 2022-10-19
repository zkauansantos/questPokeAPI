import { useEffect, useState } from 'react';
import { getPokemonsList, getPokemonsData } from '../../../services/poke-api';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import {ContainerPokemons, ListOfPokemons, CardPokemon} from './styles'

const Pokemons = () => {
    const {theme} = useContext(ThemeContext)
    const [pokemons, setPokemons] = useState([])
    const [limit, offset] = [21] 

    useEffect(() => {
        const fetchData = async () => {
            const pokemonsList = await getPokemonsList(limit, offset);
            const pokemonsPromises = pokemonsList.results.map((pokemon) => getPokemonsData(pokemon.name))
            const pokemonsData = await Promise.all(pokemonsPromises)

            setPokemons([...pokemonsData])
        }
        fetchData()

    }, [])

    console.log(pokemons)


    return(
        <ContainerPokemons>
            <ListOfPokemons>
                {
                    pokemons.map((index, position) => {
                        return(
                            <CardPokemon theme={theme} key={position}>
                                <img style={{width: '90%', display: 'block'}} src={index.sprites.other['official-artwork'].front_default}></img>
                                <p style={{textTransform: 'uppercase', fontWeight: 'bold'}}>{index.name}</p>
                            </CardPokemon>
                        )
                    })
                }
            </ListOfPokemons>
        </ContainerPokemons>
    )
}



export {Pokemons}