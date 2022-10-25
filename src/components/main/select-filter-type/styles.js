import styled from "styled-components";

const DivFilter = styled.div`
    background-color: ${({theme}) => theme.backgroundMain};
    padding: 8px;
    width: 150px;
    border-radius: 10%;
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: center;
    border: ${({theme}) => theme.borderCardAndButton};
`
const Label = styled.label`
    color: ${({theme}) => theme.cardColor};
`

const Select = styled.select`
    padding: 5px;
    border-radius: 10%;
`
const Option = styled.option`

`

export {DivFilter, Label, Select, Option}