import { Container, Logo, Pikachu, ImgAnimated, Img } from './styles'
import pikachu from '../../assets/imgs/pikachu-logo.png'
import logoPokemon from '../../assets/imgs/pokemon-logo.png'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import { ThemeTogglerButton } from '../../components/buttons/theme-toggler-button';


const Header = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <Pikachu>
        <Img src={pikachu} />    
      </Pikachu>

      <Logo>
        <ImgAnimated src={logoPokemon}/>
      </Logo>
      <ThemeTogglerButton/>

      <Pikachu>
        <Img src={pikachu} />    
      </Pikachu>
    </Container>
  )
}

export { Header }
