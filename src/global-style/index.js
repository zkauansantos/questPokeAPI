import { useContext } from "react"
import { ThemeContext } from "../contexts/theme-context"
import { StylesGlobal } from "./styles-global"

const GlobalStyle = () => {
    const {theme} = useContext(ThemeContext)

    return <StylesGlobal theme={theme}/>
}

export {GlobalStyle}