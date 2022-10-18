import { useEffect, useState } from 'react';
import { getPokemonsList, getPokemonsData } from '../../../services/poke-api';

const Pokemons = () => {

    const [pokemons, setPokemons] = useState({
        image: [],
        name : []        
    })
    const [limit, offset] = [2] 

    useEffect(() => {
        const fetchData = async () => {
            const pokemonsList = await getPokemonsList(limit, offset);
            // console.log(pokemonsList)
            const pokemonsPromises = pokemonsList.results.map((pokemon) => getPokemonsData(pokemon.name))
            // console.log(pokemonsPromises)
            const pokemonsData = await Promise.all(pokemonsPromises)
            // console.log(pokemonsData)
            const imgs = pokemonsData.map((index) => { return index.sprites.other['official-artwork'].front_default})
            // console.log(imgs)
            const names = pokemonsData.map((index) => { return index.name})
            // console.log(names)


            setPokemons({
                image: imgs,
                name: names
        })
        }
        fetchData()

    }, [])

    return(
        <div>
            <ul>
                <li>
                {
                    pokemons.image.map((img, index) => {
                        return (
                        <img key={index}  style={{width: '20%'}} src={img}></img>
                        )
                    })
                    
                }
                {
                    pokemons.name.map((name, index) => {
                        return (
                            <p style={{marginTop: '15px'}} key={index}> {name}</p>
                        )
                    })
                }
                </li>
            </ul>


        </div>
    )
}
export {Pokemons}