import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import React, { useState, useEffect } from 'react';
import Ratings from '../subcomponents/Ratings.jsx';
import ProductImg from '../subcomponents/ProductImg.jsx';
import ComparisonModal from '../subcomponents/ComparisonModal.jsx';
import WishlistActionButton from '../subcomponents/WishlistActionButton.jsx';

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

export default function RelatedCarousel({
  products, mainProduct, show, setSelectedProduct, selectedProducts,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(products.length);
  const [modal, setModal] = useState({
    display: false,
    clickedProduct: {},
  });

  const { display, clickedProduct } = modal;

  // set the length to match current children from props
  useEffect(() => {
    setLength(products.length);
  }, [products]);

  const toggleModal = (product) => {
    setModal({
      display: !display,
      clickedProduct: product,
    });
  };

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

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      toggleModal();
    }
  };

  const Card = products.map((product) => (
    <CardContainer id="card" key={product.name} style={{ width: `calc(100% / ${show})` }}>
      <CardAssetContainer>
        <div
          className="product-card__img"
          onClick={() => toggleModal(product)}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex="0"
        >
          <ProductImg product={product} />
        </div>
        <WishlistActionButton
          product={product}
          selectedProducts={selectedProducts}
          setSelectedProduct={setSelectedProduct}
        />
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

      {display && (
        <ComparisonModal
          toggleModal={toggleModal}
          product={clickedProduct}
          mainProduct={mainProduct}
        />
      )}
    </CardsContainer>
  );
}
