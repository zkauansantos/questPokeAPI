import { Container, Div, List } from "./styles"
import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"

const Footer = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <Container style={theme}>
        <Div>
          <h3> Desenvolvido por ➡ Kauan Santos</h3>
          <List>
            <li>Linkedin</li>
            <li>GitHub</li>
            <li>Gmail</li>
          </List>
        </Div>
    </Container>
  )
}





export{Footer}