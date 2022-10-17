import styled from 'styled-components';


const Container = styled.header`
    text-align: center;
    align-items: center;
    height: 250px;
    display: flex;
    justify-content: space-around;
    background-color: #edf6f9;
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