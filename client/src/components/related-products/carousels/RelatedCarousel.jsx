import React, { useState, useEffect } from 'react';
import Ratings from '../subcomponents/Ratings.jsx';
import ProductImg from '../subcomponents/ProductImg.jsx';
import Modal from '../subcomponents/Modal.jsx';
import ActionButton from '../subcomponents/ActionButton.jsx';

import { FaChevronRight, FaChevronLeft, FaiHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

import { CardsContainer, CardsWrapper, ContentWrapper, Content, LeftChevron, RightChevron, CardContainer, CardAssetContainer, CardAssetImg } from '../../../theme/carouselStyle.js';

export default function RelatedCarousel ({ products, mainProduct }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(products.length);
  const [modal, setModal] = useState({
    display: false,
    clickedProduct: {}
  });

  //set the length to match current children from props
  useEffect(() => {
    setLength(products.length)
  }, [products])

  const toggleModal = (product) => {
    setModal({
      display: !display,
      clickedProduct: product
    });
  }

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  const Card = products.map((product) =>
    <CardContainer key={product.name}>
      <CardAssetContainer>
        <div div className='product-card__img' onClick={() => toggleModal(product)}>
          <ProductImg
            product={product}
            mainProduct={mainProduct}
          />
        </div>
          {/* <ActionButton product={product}/> */}
      </CardAssetContainer>

      <div className='product-card__details'>
        <p className='product-card__category'>
          {product.category.toUpperCase()}
        </p>
        <p className='product-card__name'>
          {product.name}
        </p>
        <p className='product-card__price'>
          ${product.price.replace(/\.00$/,'')}
        </p>
        <p className='product-card__rating'>
          <Ratings />
        </p>
      </div>

    </CardContainer>
  );

  const { display, clickedProduct } = modal;

  return (

    <CardsContainer>
      <CardsWrapper>

        {
          currentIndex > 0 &&
          <LeftChevron className='left-arrow' onClick={prev}>
            <FaChevronLeft />
          </LeftChevron>
        }

          <ContentWrapper>
            <Content
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >

              {Card}

            </Content>
          </ContentWrapper>

        {
          currentIndex < (length - 1) &&
          <RightChevron className='right-arrow' onClick={next}>
            <FaChevronRight />
          </RightChevron>
        }

      </CardsWrapper>

      {display && (
        <Modal
          toggleModal={toggleModal}
          product={clickedProduct}
          mainProduct={mainProduct}
        />
      )}
    </CardsContainer>
  );
}