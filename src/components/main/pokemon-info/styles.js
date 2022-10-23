import styled from "styled-components"


const SectionInfo = styled.section`
    background-color: ${({theme}) => theme.backgroundMain };
    color: ${({theme}) => theme.color};
    display: flex;
    justify-content: center;
    min-height: 80vh;
`

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: ${({theme}) => theme.cardColor};
width: 90%;
`

const DivImg = styled.div`
    height: 500px;
    width: 500px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    border-radius: 5%;
    border: ${({theme}) => theme.borderCardAndButton};
`
const DivDetails = styled.div`
    margin-top: 55px;
    width: 100%;
    justify-content: space-around;
`

const Paragraph = styled.p`
    margin-top: 15px;
    font-weight: bold;
    
`
const Li = styled.li`
    text-align: center;
    border: ${({theme}) => theme.borderCardAndButton};
    padding: 15px;
    :nth-child(2){
        max-width: 600px;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        flex-direction: column;
}
`
const Ul = styled.ul`
    gap: 100px;
    display: flex;
    justify-content: center;

`

export {SectionInfo, Div, DivImg, DivDetails, Paragraph, Li, Ul}