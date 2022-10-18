import styled from "styled-components";


const Container = styled.footer`
  color: ${({theme}) => theme.color};
  background-color: ${({theme}) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
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