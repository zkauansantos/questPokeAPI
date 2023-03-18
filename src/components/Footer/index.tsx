import { Container, Div, List } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

export default function Footer() {
	const { theme } = useContext(ThemeContext);

	return (
		<Container theme={theme}>
			<Div>
				<h3> Desenvolvido por ➡ Kauan Santos</h3>
				<List theme={theme}>
					<li><a rel='noreferrer' href='https://www.linkedin.com/in/zkauansantos/' target='_blank'><FaLinkedin/> Linkedin</a></li>
					<li><a rel='noreferrer' href='https://github.com/zkauansantos' target='_blank'><FaGithub/> GitHub</a></li>
					<li><a rel='noreferrer' href= 'https://wa.me/5561982552480' target='_blank'><IoLogoWhatsapp/> Contato</a></li>
				</List>
			</Div>
		</Container>
	);
}
