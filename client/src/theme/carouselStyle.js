import styled from 'styled-components';

// RelatedProducts.jsx
export const Carousels = styled.div`
  padding: 50px 150px;
  width: 1200px;
  position: relative;
  margin: auto;
`;

// WishlistCarousel.jsx
export const WishlistContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DefaultCard = styled.div`
  height: 360px;
  min-width: 260px;
  margin-right: 40px;
  border-radius: 10px;
  background-color: rgba(128, 128, 128, 0.2);
`;

export const WishlistCardsContainer = styled.div`
  width: 900px;
`;

// RelatedCarousel.jsx
export const CardsContainer = styled.div`
`;

export const CardsWrapper = styled.div`
  /* display: flex;
  width: 100%; */
  position: relative;
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  height: 100%;
`;

export const Content = styled.div`
  display: flex; // important!
  transition: all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

// Carousel Chevrons
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

export const LeftChevron = styled(Chevron)`
  left: -80px;
  `;

export const RightChevron = styled(Chevron)`
  right: -80px;
  `;

// Chevrons specific to Wishlist Carousel
export const WishlistLeftChevron = styled(Chevron)`
  top: 40%;
  right: -80px;
`;

export const DeactivatedChevron = styled(Chevron)`
  right: -80px;
  color: rgba(128, 128, 128, 0.5);
  border: 1px solid rgba(128, 128, 128, 0.5);
`;

export const WishlistLeftChevronDisabled = styled(DeactivatedChevron)`
  top: 40%;
`;

// RelatedCard.jsx & WishlistCard.jsx
export const CardContainer = styled.section`
  max-width: 300px;
  flex-shrink: 0;
  flex-grow: 1;
`;

export const CardAssetContainer = styled.div`
  // border: 1px solid green;
  overflow: hidden;
  max-width: 300px;
`;

export const CardAssetImg = styled.img`
  width: 260px;
  height: 360px;
  border-radius: 10px;
  align-items: center;
  object-fit: cover;

  &:hover {
    cursor: pointer;
  }
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

export const PriceContainer = styled.div`
  display: flex;
`;

export const ProductPrice = styled.p`
  margin-top: -8px;
  color: rgb(10, 89, 81);
  font-size: 0.9em;
`;

export const PreSalePrice = styled.p`
  margin-top: -8px;
  padding-left: 10px;
  color: rgb(10, 89, 81);
  text-decoration: line-through;
  font-size: 0.9em;
`;
