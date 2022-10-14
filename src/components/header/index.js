import { Container, Logo, Pokebola } from './styles';
import pokebola from '../../assets/imgs/pokemon-logo.png'

const Header = () => {
    return (
        <Container>
            <Pokebola/>
            <Logo>4</Logo>           
            <Pokebola/>
        </Container>
    )
}


export {Header}