import styled from "styled-components";


const Container = styled.footer`
  -webkit-box-shadow: 0px 0px 31px 10px rgba(0,0,150,0.45);
  -moz-box-shadow: 0px 0px 31px 10px rgba(0,0,150,0.45);
  box-shadow: 0px 0px 31px 10px rgba(0,0,150,0.45);
  color: ${({theme}) => theme.color};
  background-color: ${({theme}) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`
const Div = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80% ;
  height: 250px;
  border-top: 1px solid; 
`
const List = styled.ul`
  margin-top: 50px;
  gap: 25px;
  display: flex;
`

export {Container, Div, List}