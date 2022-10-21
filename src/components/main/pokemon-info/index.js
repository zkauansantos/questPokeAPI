import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../contexts/theme-context";
import { SectionInfo, Div, DivImg, DivUl, Ul, Li, Paragraph } from "./styles";
import {
  getPokemonsList,
  getPokemonsData,
  getPokemonAbilities,
} from "../../../services/poke-api";

const PokemonInfo = () => {
  const { theme } = useContext(ThemeContext);
  const { name } = useParams();

  const [pokemon, setPokemon] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
        const pokemonPromise =  await getPokemonsData(name)
        console.log(pokemonPromise)

    }

    fetchData();

  }, [])

  return (
    <SectionInfo theme={theme}>
      <Div>
        <DivImg>Imagem</DivImg>
        <DivUl>
          {pokemon.map((index, position) => {
            return (
              <Ul key={position}  theme={theme}>
                <Li theme={theme}>
                  <h4>Type</h4>
                  <Paragraph> DOLOR AMET</Paragraph>
                </Li>
                <Li theme={theme}>
                  <h4>Moves</h4>
                  <Paragraph>
                    lOREM IPSUM DOLOR AMET LOREM IPSUM DOLOR AMET LOREM IPSUM
                    DOLOR AMET LOREM IPSUM DOLOR AMET
                  </Paragraph>
                </Li>
                <Li theme={theme}>
                  <h4>Abilities</h4>
                  <Paragraph>
                    lOREM IPSUM DOLOR AMET LOREM IPSUM DOLOR AMET LOREM IPSUM
                    DOLOR AMET LOREM IPSUM DOLOR AME
                  </Paragraph>
                </Li>
              </Ul>
            );
          })}
        </DivUl>
      </Div>
    </SectionInfo>
  );
};

export { PokemonInfo };
