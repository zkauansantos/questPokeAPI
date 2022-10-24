import styled from "styled-components";

const Button = styled.button`   
    cursor: pointer;
    border-radius: 10%;
    width: 150px;
    height: 50px;
    color: ${({theme}) => theme.cardColor};
    background-color: ${({theme}) => theme.backgroundMain};
    border: ${({theme}) => theme.borderCardAndButton};
    font-size: 16px;
    margin-top: 30px;
    margin-bottom: 30px;
    -webkit-box-shadow: 0px 0px 30px 3px rgba(235,198,14,1);
    -moz-box-shadow: 0px 0px 30px 3px rgba(235,198,14,1);
    box-shadow: 0px 0px 30px 3px rgba(235,198,14,0.8);
    &:hover{
        transition: 0.2s ease-in-out;
        transform: scale(1.2);
    }
`

export {Button}