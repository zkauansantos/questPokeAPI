import { useContext } from 'react'
import { ThemeContext } from '../../../contexts/theme-context'
import {DivFilter, Label, Select, Option} from './styles'

const FilterType = ({typeList}) => {

    const {theme} = useContext(ThemeContext)

    return(
        <DivFilter theme={theme}>
            <Label theme={theme}> Filtre por tipo: </Label>
            <Select >
                <Option>Selecione</Option>
                <Option>Todos</Option>
                {typeList.map((index, position) => <option key={position}>{index.name}</option>)}
            </Select>
        </DivFilter>
    ) 
}

export {FilterType}