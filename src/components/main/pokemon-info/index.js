import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../contexts/theme-context";
import { SectionInfo, Div, DivImg, DivDetails, Li, Ul } from "./styles";
import {
  getPokemonsList,
  getPokemonsData,
  getPokemonAbilities,
} from "../../../services/poke-api";

const PokemonInfo = () => {
  const { theme } = useContext(ThemeContext);
  const { name } = useParams();

  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [pokemonType, setPokemonType ] = useState([]);
  const [pokemonImg, setPokemonImg] = useState();

  useEffect(() => {
    const fetchData = async () => {
        const pokemonData =  await getPokemonsData(name)
        const pokemonAbilities = pokemonData.abilities.map((index) => getPokemonAbilities(index.ability.url))
        const pokemonAbilityAndDescript = await Promise.all(pokemonAbilities)

        setPokemonImg(pokemonData.sprites.other['official-artwork'].front_default)
        setPokemonType([...pokemonData.types])
        setPokemonMoves([...pokemonData.moves])
        setPokemonAbilities([...pokemonAbilityAndDescript])
    }

    fetchData();
  }, [])

  const PokemonType = () =>{
    return(
        <Li theme={theme}>
          <h3>Type</h3>
          {
            pokemonType.map((index, position ) => {
              return <p key={position}>{index.type.name}</p>
            })
          }
        </Li>
    )
  }

  const PokemonMoves = () => {
    return(
        <Li  theme={theme}>
          <h3>Moves</h3>
          <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center'}}>
            { pokemonMoves.map((index, position) => {
              return (
                  <p key={position}> {index.move.name},   </p>
              )
            })}
          </div>

        </Li>
    )
  }

  const PokemonAbility = () => {
    return (

        <Li theme={theme}>
          <h3>Abilities</h3>
          {
            pokemonAbilities.map((index, position) => {
              return <p key={position}> {index.name}</p>
            })
          }
       </Li>

    )
  }

  return (
    <SectionInfo theme={theme}>
      <Div>
        <DivImg theme={theme}>
          <img style={{width: '80%'}} src={pokemonImg}></img>
        </DivImg>
        <DivDetails>
          <Ul>
            <PokemonType/>
            <PokemonMoves/>
            <PokemonAbility/>
          </Ul>
        </DivDetails>
      </Div>
    </SectionInfo>
  );
};

export { PokemonInfo };
