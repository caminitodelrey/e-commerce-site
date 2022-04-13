import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    color: rgb(50, 78, 89);
  }

  & p, th, td, span, div, textarea {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }
`;

export const WidgetsContainer = styled.div`
  max-width: 80%;
  position: relative;
  margin: auto;
  padding-bottom: 50px;
`;