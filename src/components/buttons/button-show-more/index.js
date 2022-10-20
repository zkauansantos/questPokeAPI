import React, { useState, useEffect }  from "react"
import {Button} from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"
import { useContext } from "react"
import { getPokemonsList, getPokemonsData } from "../../../services/poke-api"


const ButtonShowMorePokemons = (props) => {
    const {theme} = useContext(ThemeContext)
    const limit= 10
    const [offSet, setOffSet] = useState(10)

     const handleClick = async () =>{
         
         const pokemonsList = await getPokemonsList(limit, offSet);
         const pokemonsPromises = pokemonsList.results.map((pokemon) => getPokemonsData(pokemon.name))
         const pokemonsData = await Promise.all(pokemonsPromises)
         
         
         props.addPokemons(pokemonsData)
         setOffSet(offSet + 10)
    }

    return(
        <Button onClick={handleClick} theme={theme}> Carregar Mais</Button>
    )
}

export {ButtonShowMorePokemons}