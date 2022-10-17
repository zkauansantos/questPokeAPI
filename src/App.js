import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './contexts/theme-context';
import { AppRoutes } from './pages/routes';

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

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Fuzzy Bubbles', cursive;
  }

  li{
    list-style: none;
  }
`

export default App;
