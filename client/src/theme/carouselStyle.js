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
  min-height: 500px;
`;

export const WishlistCardsContainer = styled.div`
  width: 900px;
`;

// RelatedCarousel.jsx
export const CardsWrapper = styled.div`
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

export const CardContainer = styled.section`
  max-width: 300px;
  flex-shrink: 0;
  flex-grow: 1;
`;

export const CardAssetContainer = styled.div`
  overflow: hidden;
  max-width: 300px;
`;

// ProductImg.jsx
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

// ThumbnailCarousel.jsx
export const ThumbnailCardsWrapper = styled.div`
  width: 260px;
  height: 70px;
  position: relative;
  top: -80px;
`;

export const ThumbnailContent = styled(Content)`
  transition: 400ms linear;
  // update this**
`;

export const ThumbnailCardContainer = styled.div`
  max-width: 65px;
  flex-shrink: 0;
  flex-grow: 1;
  background-color: rgba(10, 19, 10, .4);
`;

export const ThumbnailAssetContainer = styled.div`
  overflow: hidden;
  max-width: 65px;
`;

export const ThumbnailImg = styled.img`
  z-index: 2;
  width: 65px;
  height: 70px;
  align-items: center;
  object-fit: cover;

  &:hover {
    cursor: pointer;
  }
`;

export const NoThumbnailCarousel = styled.div`
  color: transparent;
  background-color: transparent;
  cursor: default;
`;