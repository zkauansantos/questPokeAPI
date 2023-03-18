import Header from '../../components/Header';

import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ThemeContext } from '../../contexts/ThemeContext';

import { getPokemonsData, getPokemonAbilities } from '../../services/pokeApi';

import { Abilities, PokemonSelected } from '../../types/detailsPoke';

import {
	SectionInfo,
	ContainerDetails,
	ContainerMoves,
	ContainerAbilities,
	Container,
	ContainerPokemon,
	ContainerType
} from './styles';

import Button from '../../components/Button';
import Loader from '../../components/Loader';

export default function DetailsPoke() {
	const { theme } = useContext(ThemeContext);
	const { name } = useParams<{name: string}>();
	const [pokemonAbilities, setPokemonAbilities] = useState<Abilities[]>([]);
	const [pokemonSelected, setPokemonSelected] = useState<PokemonSelected[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const pokemonData =  await getPokemonsData(name!);
			const pokemonAbilities = pokemonData.abilities.map((index: Abilities) => getPokemonAbilities(index.ability.url));
			const pokemonAbilityAndDescript = await Promise.all(pokemonAbilities);

			setPokemonSelected([pokemonData]);
			setPokemonAbilities([...pokemonAbilityAndDescript]);
			setIsLoading(false);
		}

		fetchData();
	}, []);

	return (
		<>
			<Header/>

			<SectionInfo theme={theme}>

				{isLoading && <Loader/>}

				{!isLoading && (
					<>
						<ContainerPokemon theme={theme}>
							<img
								src={pokemonSelected[0]?.sprites.other['official-artwork'].front_default}>
							</img>
							<h2 >{name}</h2>
						</ContainerPokemon>

						<ContainerDetails>
							<Container>
								<ContainerType theme={theme}>
									<strong>Type</strong>

									<div >
										{pokemonSelected[0]?.types.map(({ type }) => (
											<p key={type.name}>{type.name}</p>
										))}
									</div>
								</ContainerType>

								<ContainerAbilities theme={theme}>
									<strong>Abilities</strong>

									{pokemonAbilities.map((ability) => (
										<div key={ability.id} className='description'>
											<p>{ability.name}</p>
											<span>{ability.flavor_text_entries[0].flavor_text}</span>
										</div>
									))}
								</ContainerAbilities>
							</Container>

							<ContainerMoves theme={theme}>
								<strong>Moves</strong>

								<div>
									{pokemonSelected[0]?.moves.map(({ move }) => (
										<p key={move.name}> {move.name},</p>
									))}
								</div>
							</ContainerMoves>
						</ContainerDetails>

						<Link to='/'>
							<Button
								label='Voltar para a home'
							/>
						</Link>
					</>
				)}
			</SectionInfo>
		</>
	);
}
