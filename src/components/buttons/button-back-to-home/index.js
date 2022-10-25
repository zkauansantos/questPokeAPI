import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from '../../../contexts/theme-context'
import { Button } from "./styles"

const ButtonBackToHome =  () => {
    const {theme} = useContext(ThemeContext)

    return( 
        <Link to='/'>
            <Button theme={theme}> Voltar para o ínicio </Button>
        </Link>
    )
}

export {ButtonBackToHome}