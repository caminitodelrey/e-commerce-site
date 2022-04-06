import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import React, { useState, useEffect } from 'react';
import ComparisonModal from '../subcomponents/ComparisonModal.jsx';
import CarouselCard from '../subcomponents/CarouselCard.jsx';

import {
  CardsContainer,
  CardsWrapper,
  ContentWrapper,
  Content,
  LeftChevron,
  RightChevron,
} from '../../../theme/carouselStyle.js';

export default function RelatedCarousel({
  show,
  products,
  mainProduct,
  setMainProduct,
  setSelectedProduct,
  selectedProducts,
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
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            <CarouselCard
              show={show}
              products={products}
              toggleModal={toggleModal}
              handleKeyDown={handleKeyDown}
              setMainProduct={setMainProduct}
              selectedProducts={selectedProducts}
              setSelectedProduct={setSelectedProduct}
            />
          </Content>
        </ContentWrapper>
        {currentIndex < length - show && (
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
