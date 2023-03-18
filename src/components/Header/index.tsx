import { useContext } from 'react';
import { Link } from 'react-router-dom';

import pikachu from '../../assets/imgs/pikachu-logo.png';
import logoPokemon from '../../assets/imgs/pokemon-logo.png';

import { ThemeContext } from '../../contexts/ThemeContext';
import { ThemeTogglerButton } from '../../components/ThemeTogglerButton';

import {
	Container,
	Logo,
	Pikachu,
} from './styles';

export default function Header() {
	const { theme } = useContext(ThemeContext);

	return (
		<Container theme={theme}>
			<Pikachu>
				<img src={pikachu} />
			</Pikachu>

			<Link to='/'>
				<Logo>
					<img src={logoPokemon}/>
				</Logo>
			</Link>

			<ThemeTogglerButton/>

			<Pikachu>
				<img src={pikachu} />
			</Pikachu>
		</Container>
	);
}

