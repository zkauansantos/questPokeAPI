import {getPokemonsList,
        getPokemonsData,
        getPokemonAbilities,
        getTypesList,
        getTypeData,} from './services/poke-api'
import { createGlobalStyle } from 'styled-components';
import { AppRoutes } from './pages/routes';

function App() {
  return (
    <>
    <GlobalStyle/>
    <AppRoutes/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Fuzzy Bubbles', cursive;
  }
`

export default App;
