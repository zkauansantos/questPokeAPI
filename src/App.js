import {getPokemonsList,
        getPokemonsData,
        getPokemonAbilities,
        getTypesList,
        getTypeData,} from './services/poke-api'
import { Header } from './components/header';
import styled, { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`

export default App;
