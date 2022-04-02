import styled from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  : root {
    font-size ${pw2vw}
  }
`;