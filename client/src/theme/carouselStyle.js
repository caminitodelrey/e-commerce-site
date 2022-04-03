import styled from "styled-components";

// RelatedProducts.jsx
export const Carousels = styled.div`
  // border: 1px solid red;
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
  // border: 1px solid blue;
  width: 100%;
  display: flex;
  flex-direction: column;
`;


export const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

// Carousel Chevrons
export const LeftChevron = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(-50%);
  width: 50px;
  height: 50px;
  border: 1px solid transparent;
  left: -30px;
  background-color: transparent;
  color: rgba(10, 89, 51);
  cursor: pointer;
`;

export const RightChevron = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(-50%);
  width: 50px;
  height: 50px;
  border: 1px solid transparent;
  right: -80px;
  background-color: transparent;
  color: rgba(10, 89, 51);
  cursor: pointer;
`;

// Card in Cards.jsx
export const CardContainer = styled.section`
  // border: 1px solid green;
  width: 100%;
  flex-shrink: 0;
  flex-grow: 1;
  padding: 20px;
  width: calc(100% / 4.5);
`;

export const CardAssetContainer = styled.div`
  // border: 1px solid orange;
  overflow: hidden;
  height: 360px;

  &:hover {
    cursor: pointer;
  }
`;

export const CardAssetImg = styled.img`
  width: 100%;
  height: 360px;
  align-items: center;
  object-fit: cover;
`;

export const WishlistContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 3%;
  padding: 10px 10px 7px 10px;
  color: rgba(11, 191, 125);
  background: #fff;

  &:hover {
    cursor: pointer;
  }
`;