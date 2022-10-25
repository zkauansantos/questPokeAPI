import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../contexts/theme-context";
import { SectionInfo, DivDetails, DivMoves, DivContentMove, DivTypeAndAbilities, TitleCardsDetails, Div, Img, PokemonName, Span, Paragraph } from "./styles";
import { getPokemonsData, getPokemonAbilities } from "../../../services/poke-api";
import { ButtonBackToHome } from "../../buttons/button-back-to-home";

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
    //eslint-disable-next-line
  }, [])


  const PokemonType = () =>(
        <DivTypeAndAbilities theme={theme}>
          <TitleCardsDetails> Type </TitleCardsDetails>
          {pokemonType.map((index, position ) => <Paragraph theme={theme} key={position}> {index.type.name} </Paragraph>)}
        </DivTypeAndAbilities>
  )

  const PokemonMoves = () => (
        <DivMoves theme={theme}>
          <TitleCardsDetails> Moves </TitleCardsDetails>
          <DivContentMove>
            {pokemonMoves.map((index, position) => <p key={position}> {index.move.name}, </p>)}
          </DivContentMove>
        </DivMoves>
  )

  const PokemonAbility = () => (
        <DivTypeAndAbilities theme={theme}>
          <TitleCardsDetails style={{marginBottom: '10px'}}>Abilities</TitleCardsDetails>
          {
            pokemonAbilities.map((index, position) => 
            <Paragraph theme={theme} key={position}>{index.name}
            <Span  theme={theme} >{index.flavor_text_entries[0].flavor_text}</Span>
            </Paragraph>)
          }
       </DivTypeAndAbilities>
  )

  return (
    <SectionInfo theme={theme}>
          <Img src={pokemonImg}></Img>
          <PokemonName theme={theme}>{name}</PokemonName>
        <DivDetails>
            <PokemonMoves/>
            <Div>
            <PokemonType/>
            <PokemonAbility/>
            </Div>
        </DivDetails>
        <ButtonBackToHome/>
    </SectionInfo>
  );
};

export { PokemonInfo };
