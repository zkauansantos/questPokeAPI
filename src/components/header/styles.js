import styled from 'styled-components';


const Container = styled.header`
    -webkit-box-shadow: 0px 0px 31px 10px rgba(0,0,150,0.45);
    -moz-box-shadow: 0px 0px 31px 10px rgba(0,0,150,0.45);
    box-shadow: 0px 0px 31px 10px rgba(0,0,150,0.45);
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.background};
    text-align: center;
    align-items: center;
    height: 250px;
    display: flex;
    justify-content: space-around;
    position: relative;
`
const Pikachu = styled.div`
    width: 220px;
    @media screen and (max-width: 769px) {
    width: 180px;
    }
    @media screen and (max-width: 480px) {
      display: none;
  }
`

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImgAnimated = styled.img`
  width: 100%;
  transition: transform 500ms ease-in-out ;
  cursor: pointer;
  &:hover {
    transform: scale(1.3); 
}
@media screen and (max-width: 480px) {
    width: 80%;
  }

@media screen and (max-width: 325px) {
    width: 60%;
  }
`

const Img = styled.img`
  width: 90%;
`

export {Logo, Container, Pikachu, ImgAnimated, Img }