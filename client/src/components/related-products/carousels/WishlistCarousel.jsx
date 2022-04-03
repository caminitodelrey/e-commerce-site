import React from 'react';
import Ratings from '../subcomponents/Ratings.jsx';
import Modal from '../subcomponents/Modal.jsx';

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

import { CardContainer, CardsContainer, CardAssetContainer, CardAssetImg, WishlistContainer } from '../../../theme/carouselStyle.js';

export default function WishlistCarousel ({ products }) {

  const Card = products.map((product) =>
    <CardContainer className='product-card-container' key={product.name}>
      <CardAssetContainer className='product-card__asset'>
          <div className='product-card__img'>
            <CardAssetImg src={product.image || 'https://durmazz.com/writable/uploads/products/default.jpg'} />
          </div>
          <WishlistContainer className='product-card__wishlist-icon-container'>
            <MdOutlineClose />
          </WishlistContainer>
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