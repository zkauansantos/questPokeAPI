import React from "react"
import {Button} from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"
import { useContext } from "react"


const ButtonShowMorePokemons = () => {
    
    const {theme} = useContext(ThemeContext)

    return(
        <>
        <Button onClick={() => {alert('Olá')}} theme={theme}>Carregar Mais</Button>
        </>
    )
}

export {ButtonShowMorePokemons}