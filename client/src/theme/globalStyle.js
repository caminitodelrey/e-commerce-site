import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

  h1, h2, h3, h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    color: rgb(50, 78, 89);
  }

   & p, th, td {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }
`;