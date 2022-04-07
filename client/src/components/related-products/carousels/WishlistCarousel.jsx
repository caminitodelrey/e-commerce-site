import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import React, { useState, useEffect } from 'react';
import WishlistCard from './WishlistCard.jsx';
import WishlistButton from '../subcomponents/WishlistButton.jsx';

import {
  CardAssetContainer,
  WishlistCardsContainer,
  CardsWrapper,
  ContentWrapper,
  Content,
  WishlistLeftChevron,
  WishlistLeftChevronDisabled,
  DeactivatedChevron,
  RightChevron,
  DefaultCard,
  WishlistContainer,
} from '../../../theme/carouselStyle.js';

export default function WishlistCarousel({
  products,
  handleProductChange,
  setWishlistProducts,
  wishlistProducts,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(products.length);

  // determines the initial number of product cards shown on page
  const show = 3;

  // determines the total number of cards
  useEffect(() => {
    setLength(products.length);
  }, [products]);

  const next = () => {
    if (currentIndex < length - (show - 1)) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <WishlistContainer>
      <DefaultCard>
        <p>Add Outfit</p>
        <CardAssetContainer>
          <WishlistButton
            // product={products}
            wishlistProducts={wishlistProducts}
            setWishlistProducts={setWishlistProducts}
          />
        </CardAssetContainer>
      </DefaultCard>

      <WishlistCardsContainer>
        <CardsWrapper>

          {currentIndex > 0 ? (
            <WishlistLeftChevron className="left-arrow" onClick={prev}>
              <FaChevronLeft />
            </WishlistLeftChevron>
          ) : (
            <WishlistLeftChevronDisabled className="left-arrow">
              <FaChevronLeft />
            </WishlistLeftChevronDisabled>
          )}

          <ContentWrapper>
            <Content
              style={{
                transform: `translateX(-${currentIndex * (100 / show)}%)`,
              }}
            >
              <WishlistCard
                show={show}
                products={products}
                handleProductChange={handleProductChange}
                wishlistProducts={wishlistProducts}
                setWishlistProducts={setWishlistProducts}
              />
            </Content>
          </ContentWrapper>

          {currentIndex < length - show ? (
            <RightChevron className="right-arrow" onClick={next}>
              <FaChevronRight />
            </RightChevron>
          ) : (
            <DeactivatedChevron className="right-arrow">
              <FaChevronRight />
            </DeactivatedChevron>
          )}

        </CardsWrapper>
      </WishlistCardsContainer>
    </WishlistContainer>
  );
}
