import styled from "styled-components";

// RelatedProducts.jsx
export const Carousel = styled.div`
  border: 1px solid red;

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
  // border: 1px solid blue;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;
  // overflow: hidden;
`;

export const CardContainer = styled.section`
  border: 1px solid green;
  flex: 0 0 auto;
  display: flex;
  width: 230px;
  flex-direction: column;
`;

export const CardAssetContainer = styled.div`
  // border: 1px solid orange;
  overflow: hidden;
  height: 230px;
`;

export const CardAssetImg = styled.img`
  width: 100%;
  height: 230px;
  align-items: center;
  object-fit: cover;
`;

export const WishlistContainer = styled.div`
  top: -235px;
  left: 192px;
  position: relative;
  padding: 10px 10px 8px;
  background: white;
`