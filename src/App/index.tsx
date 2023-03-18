import ThemeProvider from './../contexts/ThemeContext';

import AppRoutes from './../pages/routes';

import { GlobalStyles } from './../assets/styles/GlobalStyles';

export default function App() {
	return (
		<ThemeProvider>
			<GlobalStyles/>
			<AppRoutes/>
		</ThemeProvider>
	);
}


