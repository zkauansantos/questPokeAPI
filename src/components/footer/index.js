import { Container, Div, List } from "./styles"
import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const Footer = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <Container theme={theme}>
        <Div>
          <h3> Desenvolvido por ➡ Kauan Santos</h3>
          <List>
            <li><FaLinkedin/> Linkedin</li>
            <li><FaGithub/> GitHub</li>
            <li><SiGmail/> Gmail</li>
          </List>
        </Div>
    </Container>
  )
}





export{Footer}