import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledButton } from './styles';
import { useContext } from 'react';

interface ButtonProps {
  label: string
  onShowMore?: () => void
  backToHome?: boolean
}

export default function Button({label, onShowMore}: ButtonProps) {
	const { theme } = useContext(ThemeContext);

	return (
		<StyledButton
			theme={theme}
			onClick={onShowMore}
		>
			{label}
		</StyledButton>
	);
}