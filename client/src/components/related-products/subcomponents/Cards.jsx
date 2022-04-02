import React from 'react';
import ActionButton from './ActionButton.jsx';

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { CardContainer, CardsContainer, CardAssetContainer, CardAssetImg } from '../../../theme/carouselStyle.js';

export default function Cards ({ products }) {

  const Card = products.map((product) =>
    <CardContainer className='product-card-container' key={product.name}>

      <CardAssetContainer className='product-card__asset'>
          <div className='product-card__img'>
            <a>
              <CardAssetImg src={product.image || 'https://durmazz.com/writable/uploads/products/default.jpg'} />
            </a>
          </div>
          <ActionButton />
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
        TO DO: ratings
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