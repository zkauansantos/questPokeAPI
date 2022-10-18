import { createContext, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs"; 

export const themes = {
    light: {
        icon: <FaMoon style={{color: '#333652'}}/>,
        color : ' #333652',
        background: '#e3d5ca',
        backgroundMain: 'rgb(241, 234, 229)'
    },
    dark: {
        icon: <BsSunFill style={{color: '#333652'}}/>,
        color: '#e3d5ca',
        background : ' #333652',
        backgroundMain: 'rgb(153, 155, 169)'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    
    const [theme, setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
