import styled, { keyframes, css } from "styled-components";

// RelatedProducts.jsx
export const Carousels = styled.div`
  border: 1px solid red;
  padding: 50px 100px;

  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

  h1, h2, h3 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
  }

   & p, th, td {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }

`;

// Cards.jsx
export const CardsContainer = styled.div`
  border: 1px solid blue;
  width: 100%;
  display: flex;
  flex-direction: column;
`;


export const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`

export const ContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: calc(100% / 4);
`

// Carousel Chevrons
export const LeftChevron = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(-50%);
  width: 48px;
  height: 48px;
  background-color: white;
  border: 1px solid #ddd;
  left: -30px;
`

export const RightChevron = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(-50%);
  width: 48px;
  height: 48px;
  background-color: white;
  border: 1px solid #ddd;
  right: -80px;
`

// Card in Cards.jsx
export const CardContainer = styled.section`
  // border: 1px solid green;
  // width: 250px;
  width: 100%;
  flex-shrink: 0;
  flex-grow: 1;
  padding: 20px;
`;

export const CardAssetContainer = styled.div`
  // border: 1px solid orange;
  overflow: hidden;
  height: 360px;
`;

export const CardAssetImg = styled.img`
  width: 100%;
  height: 360px;
  align-items: center;
  object-fit: cover;
`;

// const glow = keyframes`
// `;

export const WishlistContainer = styled.div`
  top: -360px;
  left: 205px;
  position: relative;
  padding: 10px 10px 8px;
  color: rgba(11, 191, 125);

  &:hover {
    cursor: pointer;
  }
`
// &:hover {
  //   animation: ${glow} 1s linear infinite;
  // }