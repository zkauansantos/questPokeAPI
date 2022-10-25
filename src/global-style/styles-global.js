import  { createGlobalStyle } from "styled-components";

const StylesGlobal = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    font-family: 'Fuzzy Bubbles', cursive;
    box-sizing: border-box;
  }

  li{
    list-style: none;
  }

  a {
    text-decoration: none;
  }

`

export { StylesGlobal }