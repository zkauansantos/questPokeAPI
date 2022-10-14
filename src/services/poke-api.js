const urlPattern = "https://pokeapi.co/api/v2/pokemon";

async function getPokemonsList(limit, offset) {
  const response = await fetch(`${urlPattern}/?limit=${limit}&offset=${offset}`);
  return await response.json();
}

async function getPokemonsData(name) {
  const response = await fetch(`${urlPattern}/${name}`);
  return await response.json();
}

async function getPokemonAbilities(url) {
  const response = await fetch(url);
  return await response.json();
}

async function getTypesList() {
  const response = await fetch("https://pokeapi.co/api/v2/type");
  return await response.json();
}

async function getTypeData(url) {
  const response = await fetch(url);
  return await response.json();
}

export {
  getPokemonsList,
  getPokemonsData,
  getPokemonAbilities,
  getTypesList,
  getTypeData,
};