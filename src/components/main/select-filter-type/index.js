import { useContext, useState } from 'react'
import { ThemeContext } from '../../../contexts/theme-context'
import { getTypeData, getPokemonsData } from '../../../services/poke-api'
import {DivFilter, Label, Select, Option} from './styles'

const FilterType = ({typeList, setPokemons}) => {

    const {theme} = useContext(ThemeContext)

    async function handleChange (event){
        const typeSelected = event.target.value
        const typesDataPromises = typeList.map((index) => getTypeData(index.url));
        const typeData = await Promise.all(typesDataPromises);
        const filterTypeSelected = typeData.filter((index) => index.name === typeSelected);
        const pokemonsListOfTypeSelected = filterTypeSelected[0].pokemon.map((index) => index.pokemon);
        const pokemonsDataOfTypePromises = pokemonsListOfTypeSelected.map((pokemon) => getPokemonsData(pokemon.name));
        const pokemonsDataOfType = await Promise.all(pokemonsDataOfTypePromises);
        
        if ( typeSelected === 'todos' || typeSelected === 'selecione'){
            return
        }
        else{
           setPokemons([ ...pokemonsDataOfType])
        }

    }

    return(
        <DivFilter theme={theme}>
            <Label theme={theme}> Filtre por tipo: </Label>
            <Select onChange={handleChange}>
                <Option value='selecione'>Selecione</Option>
                <Option value='todos'>Todos</Option>
                {typeList.map((index, position) => {
                    return(
                        <option value={index.name} key={position}>{index.name}</option> 
                    )
                })} 
            </Select>
        </DivFilter>
    ) 
}

export {FilterType}

