import styled from 'styled-components';


const Container = styled.header`
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
`

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
`;

const ImgAnimated = styled.img`
width: 100%;
transition: transform 500ms ease-in-out ;
cursor: pointer;
&:hover {
  transform: scale(1.3);
}
`

const Img = styled.img`
  width: 90%;
`

export {Logo, Container, Pikachu, ImgAnimated, Img }