import React, { useState, useEffect } from 'react';
import Ratings from '../subcomponents/Ratings.jsx';
import ProductImg from '../subcomponents/ProductImg.jsx';
import ActionButton from '../subcomponents/ActionButton.jsx';

import { FaChevronRight, FaChevronLeft, FaiHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

import { CardContainer, CardsContainer, CardAssetContainer, CardAssetImg } from '../../../theme/carouselStyle.js';

export default function RelatedCarousel ({ products, mainProduct }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(products.length);

  //set the length to match current children from props
  useEffect(() => {
    setLength(products.length)
  }, [products])



  const Card = products.map((product) =>
    <CardContainer className='product-card-container' key={product.name}>
      <CardAssetContainer className='product-card__asset'>
          <ProductImg product={product} mainProduct={mainProduct}/>
          <ActionButton product={product}/>
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

  return (
    <CardsContainer className='cards-container'>
      <FaChevronLeft />
      {Card}
      <FaChevronRight />
    </CardsContainer>
  );

}