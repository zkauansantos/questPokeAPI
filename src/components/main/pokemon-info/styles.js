import styled from "styled-components"


const SectionInfo = styled.section`
    background-color: ${({theme}) => theme.backgroundMain };
    color: ${({theme}) => theme.color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DivDetails = styled.div`
    margin-top: 55px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
    padding-bottom: 20px;
    @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 25px;
    justify-content: center;
    text-align: center;
    }

`

const DivMoves = styled.div`
    border-radius: 3%;
    text-align: center;
    border: ${({theme}) => theme.borderCardAndButton};
    padding: 15px;
    max-width: 650px;
    position: relative;
`
const DivContentMove = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
`

const DivTypeAndAbilities = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    min-width: 200px;
    border: ${({theme}) => theme.borderCardAndButton};
    min-height: 150px;
    border-radius:5%;
    padding: 15px;
    flex-wrap: wrap;
    position: relative;
`

const TitleCardsDetails = styled.h3`
    text-transform: uppercase;
    color: rgb(250, 199, 5);
    margin-bottom: 10px;
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Img = styled.img`
    margin-top: 75px;
    width: 32%;
    border-bottom: 3px solid  rgb(250, 199, 5);
    @media screen and (max-width: 1024px) {
    width: 65%;
    }

`

const PokemonName = styled.h2`
    color: ${({theme}) => theme.cardColor};
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 30px;
    margin-top: 10px;
    @media screen and (max-width: 700px) {
    font-size: 22px;
    }
`
const Span = styled.span`
    display:block;
    font-weight: normal;
    margin-bottom: 10px;
    color: ${({theme}) => theme.color}
`

const Paragraph = styled.p`
    color: ${({theme}) => theme.cardColor};
    font-weight: bold;
`

export {SectionInfo, DivDetails, DivMoves, DivContentMove , DivTypeAndAbilities, TitleCardsDetails, Div, Img, PokemonName, Span, Paragraph}