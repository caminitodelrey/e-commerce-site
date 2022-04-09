import styled from 'styled-components';

// RelatedProducts.jsx
export const Carousels = styled.div`
  // border: 1px solid red;
  padding: 50px 150px;
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

const Chevron = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(-50%);
  width: 47px;
  height: 45px;
  border: 1px solid black;
  background-color: white;
  color: rgba(10, 89, 51);
  cursor: pointer;
`;

// Carousel Chevrons
export const LeftChevron = styled(Chevron)`
  left: -30px;
`;

export const RightChevron = styled(Chevron)`
  right: -80px;
`;

// Card in Cards.jsx
export const CardContainer = styled.section`
  // border: 1px solid green;
  width: 100%;
  flex-shrink: 0;
  flex-grow: 1;
`;

export const CardAssetContainer = styled.div`
  // border: 1px solid orange;
  overflow: hidden;
  width: 260px;
  height: 360px;

  &:hover {
    cursor: pointer;
  }
`;

export const CardAssetImg = styled.img`
  width: 260px;
  height: 360px;
  border-radius: 10px;
  align-items: center;
  object-fit: cover;
`;

// Product Card Details
export const ProductCategory = styled.p`
  color: rgb(128, 128, 128);
  font-size: 0.875em;
`;

export const ProductName = styled.p`
  font-weight: bold;
  margin-top: -8px;
`;

export const ProductPrice = styled.p`
  margin-top: -8px;
  color: rgb(10, 89, 81);
  font-size: 0.9em;
`;

// Action Button
export const ActionButtonContainer = styled.div`
  position: absolute;
  top: 0%;
  transform: translateX(630%);
  padding: 10px 10px 7px 10px;
  border-radius: 0 6px ;
  background: #fff;
  color: rgba(11, 191, 125);

  &:hover {
    cursor: pointer;
  }
`;
