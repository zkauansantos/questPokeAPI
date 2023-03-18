import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  .react-switch-handle {
    *{
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({theme}) => theme.background};
    }
  }
`