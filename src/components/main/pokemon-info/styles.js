import styled from "styled-components"


const SectionInfo = styled.section`
    background-color: ${({theme}) => theme.backgroundMain };
    color: ${({theme}) => theme.color};
    height: 100vh;
    display: flex;
    justify-content: center;

`

const Div = styled.div`
display: grid;
grid-template-rows: repeat(2, auto);
justify-content: center;
flex-direction: column;
align-items: center;
color: ${({theme}) => theme.cardColor};
width: 90%;
`

const DivImg = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 55px;
`
const DivUl = styled.div`
    height: 100%;
`
const Ul = styled.ul`
    padding: 25px;
    display: flex;
    justify-content: space-around;
    gap: 35px;
`
const Li = styled.li`
    text-align: center;
    border: ${({theme}) => theme.borderCardAndButton};
    padding: 15px;
    min-width: 200px;

`
const Paragraph = styled.p`
    margin-top: 15px;
`


export {SectionInfo, Div, Ul, DivImg, DivUl, Li, Paragraph}