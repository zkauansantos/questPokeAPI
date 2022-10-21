import React from "react"
import {Button} from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"
import { useContext } from "react"

const ButtonShowMorePokemons = ({offSet, setOffSet}) => {
    const {theme} = useContext(ThemeContext)

    const handleClick = () => setOffSet(offSet + 10)
    
    return(
        <Button onClick={() => handleClick()} theme={theme}> Carregar Mais </Button>
    )
}

export {ButtonShowMorePokemons}