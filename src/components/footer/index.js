import { Container, Div, List } from "./styles"
import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'

const Footer = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <Container theme={theme}>
        <Div>
          <h3> Desenvolvido por ➡ Kauan Santos</h3>
          <List>
            <li><a rel="noreferrer" href='https://www.linkedin.com/in/kauansantosdepontes/' target='_blank' style={{color: theme.color}}><FaLinkedin/> Linkedin</a></li>
            <li><a rel="noreferrer" href='https://github.com/zkauansantos' target='_blank' style={{color: theme.color}}><FaGithub/> GitHub</a></li>
            <li><a rel="noreferrer" href= 'https://wa.me/5561982552480' target='_blank' style={{color: theme.color}}><IoLogoWhatsapp/> Contato</a></li>
          </List>
        </Div>
    </Container>
  )
}





export{Footer}