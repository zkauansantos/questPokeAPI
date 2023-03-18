import { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { getPokemonsList, getPokemonsData } from '../../services/pokeApi';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Pokemon } from '../../types/cardPokemon';

import {
	Container,
	BattleArena,
	ContainerSearchs,
	ContainerPokemons,
	ListOfPokemons,
	CardPokemon,
} from './styles';
import Loader from '../Loader';
import Button from '../Button';

export default function PokemonsList() {
	const { theme } = useContext(ThemeContext);
	const [pokemons, setPokemons] = useState <Pokemon[]>([]);
	const [offSet, setOffSet] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	const filteredsPokemons = useMemo(() => (
		pokemons.filter((pokemon) => (
			pokemon.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
		))), [pokemons, searchTerm]);

	function handleSearchTerm(event: React.ChangeEvent<HTMLInputElement>) {
		setSearchTerm(event.target.value);
	}

	function showMore(){
		setOffSet(offSet + 10);
	}

	async function fetchData() {
		setIsLoading(true);
		const pokemonsList = await getPokemonsList(10, offSet);
		const pokemonsPromises = pokemonsList.results.map((pokemon: Pokemon) => getPokemonsData(pokemon.name));
		const pokemonsData = await Promise.all(pokemonsPromises);

		setPokemons([...pokemons, ...pokemonsData]);
		setIsLoading(false);
	}

	useEffect(() => {
		fetchData();
	}, [offSet]);

	console.log('renderizou');

	return (
		<Container theme={theme}>

			<BattleArena>
				<ContainerSearchs theme={theme}>
					<input type='search' onChange={handleSearchTerm} placeholder='Buscar pokemon..'/>
				</ContainerSearchs>

				{isLoading && <Loader/>}

				{!isLoading && (
					<ContainerPokemons>
						<ListOfPokemons>
							{filteredsPokemons.map((pokemon) => (
								<Link to={`/${pokemon.name}`} key={pokemon.id} >
									<CardPokemon theme={theme} >
										<img src={pokemon.sprites.other['official-artwork'].front_default}></img>
										<span>{pokemon.name}</span>
									</CardPokemon>
								</Link>
							))}
						</ListOfPokemons>

						{filteredsPokemons.length > 0 && (
							<Button
								onShowMore={showMore}
								label='Carregar Mais'/>
						)}
					</ContainerPokemons>
				)}
			</BattleArena>
		</Container>

	);
}