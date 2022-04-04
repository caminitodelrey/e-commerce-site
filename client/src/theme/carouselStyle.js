import styled from "styled-components";

// RelatedProducts.jsx
export const Carousels = styled.div`
  // border: 1px solid red;
  padding: 50px 150px;
`;

export const CarouselHeader = styled.div`
  padding-left: 10px;
  top: -20px;
  border: 1px solid #bbb;
`

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
  background-color: transparent;
  color: rgba(10, 89, 51);
  cursor: pointer;
`

// Carousel Chevrons
export const LeftChevron = styled(Chevron)`
  left: -30px;
`;

export const RightChevron = styled(Chevron)`
  right: -80px;
`;

// Card in Cards.jsx
export const CardContainer = styled.section`
  //border: 1px solid green;
  width: 100%;
  flex-shrink: 0;
  flex-grow: 1;
  padding: 20px;
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
  // width: 100%;
  width: 260px;
  height: 360px;
  align-items: center;
  object-fit: cover;
`;

export const ActionButtonContainer = styled.div`
  position: absolute;
  top: 3%;
  transform: translateX(630%);
  padding: 10px 10px 7px 10px;
  color: rgba(11, 191, 125);
  background: #fff;

  &:hover {
    cursor: pointer;
  }
`;