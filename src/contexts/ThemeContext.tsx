import { createContext, ReactNode } from 'react';

import { themes } from '../assets/styles/themes';
import { usePersistedTheme } from '../hooks/usePersistedTheme';

import { Theme } from '../types/theme';

interface ThemeProviderProps {
  children: ReactNode
}

export interface ThemeContextValue {
  theme: Theme;
  setPersistedTheme:(newTheme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
	theme: themes.light,
	setPersistedTheme:() => null,
});

export default function ThemeProvider({children}: ThemeProviderProps) {
	const { theme, setPersistedTheme } = usePersistedTheme(themes.light);

	return (
		<ThemeContext.Provider value={{theme, setPersistedTheme}}>
			{children}
		</ThemeContext.Provider>
	);
}


