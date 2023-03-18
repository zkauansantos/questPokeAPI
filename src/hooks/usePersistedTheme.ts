import { useEffect, useState } from 'react';
import { Theme } from '../types/theme';

export const usePersistedTheme = (defaultTheme: Theme) => {
	const [theme, setTheme] = useState<Theme>(() => {
		const persistedTheme = localStorage.getItem('theme');

		if (persistedTheme) {
			return JSON.parse(persistedTheme);
		}

		return defaultTheme;
	});

	function setPersistedTheme(newTheme: Theme) {
		localStorage.setItem('theme', JSON.stringify(newTheme));
		setTheme(newTheme);
	}

	useEffect(() => {
		setPersistedTheme(theme);
	}, [theme]);

	return { theme, setPersistedTheme };
};