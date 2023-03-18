import { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { themes } from '../../assets/styles/themes';

import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

import Switch from 'react-switch';

import { Container }from './styles';

export const ThemeTogglerButton = () => {
	const { theme, setPersistedTheme } = useContext(ThemeContext);

	function toggleTheme() {
		setPersistedTheme(theme === themes.light ? themes.dark : themes.light);
	}

	return (
		<Container>
			<Switch
				onChange={toggleTheme}
				checked={theme.color === '#e3d5ca'}
				checkedHandleIcon={<BsSunFill color='#333652'/>}
				checkedIcon={false}
				uncheckedIcon={false}
				uncheckedHandleIcon={<FaMoon/>}
				height={25}
				width={55}
				handleDiameter={30}
				onColor='#e3d5ca'
				offColor='#333652'
			/>
		</Container>
	);
};


