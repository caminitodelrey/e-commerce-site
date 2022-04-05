import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
// import { MdOutlineClose } from 'react-icons/md';

import React, { useState, useEffect } from 'react';
import Ratings from '../subcomponents/Ratings.jsx';
import ProductImg from '../subcomponents/ProductImg.jsx';
// import ActionButton from '../subcomponents/ActionButton.jsx';

import {
  CardsContainer,
  CardsWrapper,
  ContentWrapper,
  Content,
  LeftChevron,
  RightChevron,
  CardContainer,
  CardAssetContainer,
  ProductCategory,
  ProductName,
  ProductPrice,
} from '../../../theme/carouselStyle.js';

export default function WishlistCarousel({ products, show }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(products.length);

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

  const Card = products.map((product) => (
    <CardContainer key={product.name} style={{ width: `calc(100% / ${show})` }}>
      <CardAssetContainer>
        <div
          className="product-card__img"
        >
          <ProductImg product={product} />
        </div>
        {/* <ActionButton
          products={products}
          product={product}
        /> */}
      </CardAssetContainer>

      <div className="product-card__details">
        <ProductCategory className="product-card__category">
          {product.category.toUpperCase()}
        </ProductCategory>
        <ProductName className="product-card__name">{product.name}</ProductName>
        <ProductPrice className="product-card__price">
          $
          {product.price.replace(/\.00$/, '')}
        </ProductPrice>
        <p className="product-card__rating">
          <Ratings ratings={product.ratings} />
        </p>
      </div>
    </CardContainer>
  ));

  return (
    <CardsContainer>
      <CardsWrapper>
        {currentIndex > 0 && (
          <LeftChevron className="left-arrow" onClick={prev}>
            <FaChevronLeft />
          </LeftChevron>
        )}
        <ContentWrapper>
          <Content
            style={{
              transform: `translateX(-${currentIndex * (100 / (show + 1))}%)`,
            }}
          >
            {Card}
          </Content>
        </ContentWrapper>
        {currentIndex < length - (show - 1) && (
          <RightChevron className="right-arrow" onClick={next}>
            <FaChevronRight />
          </RightChevron>
        )}
      </CardsWrapper>

    </CardsContainer>
  );
}
