import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';

import React, { useState, useEffect } from 'react';
import WishlistCard from './WishlistCard.jsx';
import WishlistButton from '../subcomponents/WishlistButton.jsx';

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
  DefaultCardButton,
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

  // const addToWishlist = (product) => {
  //   if (!window.localStorage.getItem('wishlist')) {
  //     setWishlistProducts([...wishlistProducts, product]);
  //     window.localStorage.setItem('wishlist', JSON.stringify([...wishlistProducts, product]));
  //     // setDisable(true);
  //   } else {
  //     const storedItems = JSON.parse(window.localStorage.getItem('wishlist'));
  //     const itemExist = storedItems.some((obj) => obj.id === product.id);
  //     if (!itemExist) {
  //       setWishlistProducts([...wishlistProducts, product]);
  //       window.localStorage.setItem('wishlist', JSON.stringify([...wishlistProducts, product]));
  //       // setDisable(true);
  //     }
  //   }
  // }

  return (
    <WishlistContainer>

      <DefaultCard>
        <DefaultCardButton
          type="submit"
          // onClick={addToWishlist(currentProduct)}
        >
          <BsPlusLg />
          &nbsp;
          ADD CURRENT OUTFIT
        </DefaultCardButton>
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
