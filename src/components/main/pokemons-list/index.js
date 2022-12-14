import { useEffect, useState } from 'react';
import { getPokemonsList, getPokemonsData, getTypesList } from '../../../services/poke-api';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import {ContainerPokemons, ListOfPokemons, CardPokemon, Img, Name} from './styles'
import {ButtonShowMorePokemons} from '../../buttons/button-show-more/index'
import { Link } from 'react-router-dom';
import { FilterType } from '../select-filter-type';

const Pokemons = () => {
    const {theme} = useContext(ThemeContext)
    const [pokemons, setPokemons] = useState([])
    const [offSet, setOffSet] = useState(0)
    const [typeList, setTypeList] = useState([])
    const limit= 10

    useEffect(() => {
        const fetchData = async () => {
            const pokemonsList = await getPokemonsList(limit, offSet);
            const pokemonsPromises = pokemonsList.results.map((pokemon) => getPokemonsData(pokemon.name))
            const pokemonsData = await Promise.all(pokemonsPromises)

            setPokemons([...pokemons, ...pokemonsData])
        }
        fetchData()
        
        //eslint-disable-next-line
    }, [offSet])
    

    useEffect(() => {
        const fetchData = async () => {
            const typeList = await getTypesList ()

            setTypeList(typeList.results)
        }
        fetchData()
    },[])

    const PokemonsList = () => {
        return (
            <ContainerPokemons>
                <FilterType typeList ={typeList} pokemons={pokemons} setPokemons={setPokemons}/>
                <ListOfPokemons>
                    {
                        pokemons.map((index, position) => {
                            return(
                                <Link to={`pokemon/${index.name}`} key={position}>  
                                    <CardPokemon theme={theme} >
                                        <Img src={index.sprites.other['official-artwork'].front_default} alt={index.name}></Img>
                                        <Name>{index.name}</Name>
                                    </CardPokemon>
                                </Link>   
                            )
                        })
                    }
                </ListOfPokemons>
            <ButtonShowMorePokemons offSet={offSet} setOffSet={setOffSet}  />
        </ContainerPokemons>
        )
    }

    return(
        <PokemonsList/>
    )
}

export {Pokemons}