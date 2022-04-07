import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
// import { BsPlusLg } from 'react-icons/bs';

import React, { useState, useEffect } from 'react';
import WishlistCard from './WishlistCard.jsx';
import AddButton from '../subcomponents/AddButton.jsx';

import {
  WishlistCardsContainer,
  CardsWrapper,
  ContentWrapper,
  Content,
  WishlistContainer,
} from '../../../theme/carouselStyle.js';

import {
  WishlistLeftChevron,
  RightChevron,
  DeactivatedLeftChevron,
  DeactivatedRightChevron,
  DefaultCard,
  // DefaultCardButton,
} from '../../../theme/buttonStyle.js';

export default function WishlistCarousel({
  currentProduct,
  products,
  handleProductChange,
  setWishlistProducts,
  wishlistProducts,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(products.length);
  // const [disable, setDisable] = useState(false);

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
        <AddButton
          product={currentProduct}
          wishlistProducts={wishlistProducts}
          setWishlistProducts={setWishlistProducts}
        />
        {/* <DefaultCardButton
          type="submit"
          onClick={addToWishlist(currentProduct)}
          disabled={disable}
        >
          <BsPlusLg />
          &nbsp;
          ADD CURRENT OUTFIT
        </DefaultCardButton> */}
      </DefaultCard>

      <WishlistCardsContainer>
        <CardsWrapper>

          {currentIndex > 0 ? (
            <WishlistLeftChevron className="left-arrow" onClick={prev}>
              <FaChevronLeft />
            </WishlistLeftChevron>
          ) : (
            <DeactivatedLeftChevron className="left-arrow">
              <FaChevronLeft />
            </DeactivatedLeftChevron>
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
            <DeactivatedRightChevron className="right-arrow">
              <FaChevronRight />
            </DeactivatedRightChevron>
          )}
        </CardsWrapper>
      </WishlistCardsContainer>

    </WishlistContainer>
  );
}
