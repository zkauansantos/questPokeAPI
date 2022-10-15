import styled from "styled-components";


const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #edf6f9;
  height: 30vh;
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #0d1b2a;
  width: 80% ;
  height: 250px;
  border-top: 1px solid #0d1b2a; ;
`
const List = styled.ul`
  margin-top: 50px;
  gap: 25px;
  display: flex;
`

export {Container, Div, List}