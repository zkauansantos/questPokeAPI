import styled from 'styled-components'
import { Container, Logo, Pikachu, ImgAnimated, Img } from './styles'
import { Button } from '../buttons'
import pikachu from '../../assets/imgs/pikachu-logo.png'
import logoPokemon from '../../assets/imgs/pokemon-logo.png'

const Header = () => {
  return (
    <Container>
      <Pikachu>
        <Img src={pikachu} />    
      </Pikachu>

      <Logo>
        <ImgAnimated src={logoPokemon}/>
      </Logo>
        <Button>Mudar tema</Button>

      <Pikachu>
        <Img src={pikachu} />    
      </Pikachu>
    </Container>
  )
}

export { Header }
