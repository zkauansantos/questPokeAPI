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
    box-sizing: border-box;
  }

  li{
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`

export default App;
