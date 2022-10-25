import { useContext } from 'react';
import { ThemeProvider } from './contexts/theme-context';
import { AppRoutes } from './pages/routes';
import { ThemeContext } from './contexts/theme-context';
import { GlobalStyle } from './global-style';

function App() {

  const {theme} =useContext(ThemeContext)

  return (
    <>
      <GlobalStyle/>    
        <ThemeProvider>
        <AppRoutes/>
      </ThemeProvider>
    </>  
  );
}

export  {App}
