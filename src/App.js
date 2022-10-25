import { ThemeProvider } from './contexts/theme-context';
import { AppRoutes } from './pages/routes';
import { GlobalStyle } from './global-style';

function App() {

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
