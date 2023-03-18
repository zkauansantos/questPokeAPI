const urlPattern = 'https://pokeapi.co/api/v2/pokemon';

async function getPokemonsList(limit: number, offset: number) {
	const response = await fetch(`${urlPattern}/?limit=${limit}&offset=${offset}`);
	return await response.json();
}

async function getPokemonsData(name: string) {
	const response = await fetch(`${urlPattern}/${name}`);
	return await response.json();
}

async function getPokemonAbilities(url: string) {
	const response = await fetch(url);
	return await response.json();
}

export {
	getPokemonsList,
	getPokemonsData,
	getPokemonAbilities,
};