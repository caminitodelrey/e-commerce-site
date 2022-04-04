import React, { useState, useEffect } from 'react';
// import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
// import { MdOutlineClose } from 'react-icons/md';
import Ratings from '../subcomponents/Ratings.jsx';

import {
  CardsContainer,
  CardsWrapper,
  ContentWrapper,
  Content,
  LeftChevron,
  RightChevron,
  CardContainer,
  CardAssetContainer,
  CardAssetImg,
} from '../../../theme/carouselStyle.js';

export default function WishlistCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(products.length);

  useEffect(() => {
    setLength(products.length);
  }, [products]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const Card = products.map((product) => (
    <CardContainer className="product-card-container" key={product.name}>
      <CardAssetContainer className="product-card__asset">
        <div className="product-card__img">
          <CardAssetImg
            src={
              product.image
              || 'https://durmazz.com/writable/uploads/products/default.jpg'
            }
          />
        </div>

        {/* <MdOutlineClose /> */}
      </CardAssetContainer>

      <div className="product-card__details">
        <p className="product-card__category">
          {product.category.toUpperCase()}
        </p>
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price">
          $
          {product.price.replace(/\.00$/, '')}
        </p>
        <p className="product-card__rating">
          <Ratings />
        </p>
      </div>
    </CardContainer>
  ));

  return (
    <CardsContainer className="cards-container">
      <CardsWrapper>
        <ContentWrapper>
          <Content>
            {currentIndex > 0 && (
              <LeftChevron className="left-arrow" onClick={prev}>
                &lt;
              </LeftChevron>
            )}

            {Card}

            {currentIndex < length - 1 && (
              <RightChevron className="right-arrow" onClick={next}>
                &gt;
              </RightChevron>
            )}
          </Content>
        </ContentWrapper>
      </CardsWrapper>
    </CardsContainer>
  );
}
