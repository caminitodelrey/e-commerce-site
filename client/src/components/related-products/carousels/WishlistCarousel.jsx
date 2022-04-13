import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import React, { forwardRef, useState, useEffect } from 'react';
import WishlistCard from './WishlistCard.jsx';
import AddButton from '../subcomponents/AddButton.jsx';

import {
  CarouselHeader,
  WishlistCarouselWrapper,
  WishlistCardsContainer,
  WishlistCardsWrapper,
  ContentWrapper,
  Content,
  WishlistContainer,
} from '../../../theme/carouselStyle.js';

import {
  ChevronsContainer,
  Chevron,
  DeactivatedChevron,
  DefaultCard,
} from '../../../theme/buttonStyle.js';

const WishlistCarousel = forwardRef(
  (
    {
      currentProduct,
      products,
      handleProductChange,
      setWishlistProducts,
      wishlistProducts,
    },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(products.length);
    const [displayWishlist, setDisplayWishlist] = useState(false);

    // determines the initial number of product cards shown on page
    const maxDisplayCount = 4;

    // determines the total number of cards
    useEffect(() => {
      setLength(products.length);
    }, [products]);

    const next = () => {
      if (currentIndex < length - maxDisplayCount) {
        setCurrentIndex((prevState) => prevState + 1);
      }
    };

    const prev = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevState) => prevState - 1);
      }
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
        toggleModal();
      }
    };

    return (
      <div>
        <CarouselHeader
          ref={ref}
          onClick={() => setDisplayWishlist(!displayWishlist)}
        >
          <h2>WISHLIST {!displayWishlist ? '—' : '+'}</h2>
          <ChevronsContainer>
            {length <= maxDisplayCount ? (
              <div></div>
            ) : currentIndex > 0 ? (
              <Chevron className="left-arrow" onClick={prev}>
                <FaChevronLeft />
              </Chevron>
            ) : (
              <DeactivatedChevron className="left-arrow">
                <FaChevronLeft />
              </DeactivatedChevron>
            )}

            {length <= maxDisplayCount ? (
              <div></div>
            ) : currentIndex < length - maxDisplayCount ? (
              <Chevron className="right-arrow" onClick={next}>
                <FaChevronRight />
              </Chevron>
            ) : (
              <DeactivatedChevron className="right-arrow">
                <FaChevronRight />
              </DeactivatedChevron>
            )}
          </ChevronsContainer>
        </CarouselHeader>

        {!displayWishlist && (
          <WishlistCarouselWrapper>
            <DefaultCard>
              <AddButton
                product={currentProduct}
                wishlistProducts={wishlistProducts}
                setWishlistProducts={setWishlistProducts}
              />
            </DefaultCard>
            <WishlistContainer className="wishlist-container">
              <WishlistCardsContainer className="wishlist-cards-container">
                <WishlistCardsWrapper className="wishlist-cards-wrapper">
                  <ContentWrapper>
                    <Content
                      style={{
                        transform: `translateX(-${
                          currentIndex * (100 / maxDisplayCount)
                        }%)`,
                      }}
                    >
                      <WishlistCard
                        maxDisplayCount={maxDisplayCount}
                        products={products}
                        handleProductChange={handleProductChange}
                        wishlistProducts={wishlistProducts}
                        setWishlistProducts={setWishlistProducts}
                      />
                    </Content>
                  </ContentWrapper>
                </WishlistCardsWrapper>
              </WishlistCardsContainer>
            </WishlistContainer>
          </WishlistCarouselWrapper>
        )}
      </div>
    );
  },
);

export default WishlistCarousel;
