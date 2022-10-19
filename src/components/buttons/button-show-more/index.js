import React, { useState } from "react"
import {Button} from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"
import { useContext } from "react"
import { getPokemonsList, getPokemonsData } from "../../../services/poke-api"



const ButtonShowMorePokemons = (props) => {
    const {theme} = useContext(ThemeContext)
    const [limit, offset] = [10, 0]

    async function handleClick () {
        const fetchData = async () => {
            const pokemonsList = await getPokemonsList(limit, offset)
            const pokemonsPromises = pokemonsList.results.map((pokemon) => getPokemonsData(pokemon.name))
            const pokemonsData = await Promise.all(pokemonsPromises)
            
            
            props.addPokemons(pokemonsData)       
        }
        fetchData()
    }

    return(
        <>
        <Button onClick={handleClick} theme={theme}> Carregar Mais</Button>
        </>
    )
}

export {ButtonShowMorePokemons}