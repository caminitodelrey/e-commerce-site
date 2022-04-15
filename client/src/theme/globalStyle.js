import styled, { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: 'var(--white)',
  text: '#000',
  toggleBorder: '#FFF',
  header: 'rgb(50, 78, 89)',
  otherText: '#000',
  blackToWhite: 'rgb(0, 0, 0)',
  icons: 'rgb(25, 46, 64)',
  banner: 'rgb(245, 245, 245)',
  star: 'brightness(1)',
}
export const darkTheme = {
  body: 'rgb(35,36,37)',
  text: 'rgb(169, 169, 169)',
  toggleBorder: '#6B8096',
  header: '#fff',
  otherText: 'rgb(169, 169, 169)',
  blackToWhite: 'rgb(255, 255, 255)',
  icons: 'rgb(255, 255, 255)',
  banner: 'rgb(128, 128, 128)',
  star: 'brightness(0.19)',
}

export const StarImg = styled.img`
  filter: ${({ theme }) => theme.star};
`;

// usage example ==> color: var(--theme-primary);

export const GlobalStyle = createGlobalStyle`

  :root {
    --dark-green: rgb(3, 115, 83);
    --accent-green: rgb(11, 191, 125);
    --white: #FFFFFF;
  }

  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  h1, h2, h3, h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    color: ${({ theme }) => theme.header};
  }

  & p, th, td, span, div, textarea {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.otherText};
  }
`;

export const WidgetsContainer = styled.div`
  max-width: 80%;
  position: relative;
  margin: auto;
  padding-bottom: 50px;
`;