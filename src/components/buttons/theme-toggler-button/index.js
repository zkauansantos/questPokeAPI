import { useContext } from "react"
import { Button } from "../button-theme"
import { ThemeContext, themes } from "../../../contexts/theme-context"

export const ThemeTogglerButton = () => {

    const {theme, setTheme} = useContext(ThemeContext)

    return(
            <Button onClick={() => {
                setTheme(theme === themes.light ? themes.dark : themes.light)}} >{theme.icon}</Button>
    )
}