import { ButtonTheme } from "./styles";

const Button = ({children}) => {
    return (
        <ButtonTheme>
            {children}
        </ButtonTheme>
    )
}

export {Button}