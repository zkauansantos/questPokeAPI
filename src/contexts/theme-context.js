import { createContext, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs"; 

export const themes = {
    light: {
        icon: <FaMoon style={{color: '#333652'}}/>,
        color : ' #333652',
        background: '#edf6f9'
    },
    dark: {
        icon: <BsSunFill style={{color: '#333652'}}/>,
        color: '#edf6f9',
        background : ' #333652'
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
