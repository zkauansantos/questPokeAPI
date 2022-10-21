import styled from "styled-components"

 export const ButtonStyled = styled.button`
    font-size: 15px;
    height: 35px;
    width: 35px;
    border: 1px solid;
    border-radius: 50%;
    position: absolute;
    bottom: -20px;
    cursor: pointer;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 480px) {
      font-size: 12px;
      height: 30px;
      width: 30px;
      bottom: -18px;
  }
`