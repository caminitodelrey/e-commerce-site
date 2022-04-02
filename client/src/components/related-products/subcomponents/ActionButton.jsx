import React from 'react';

import { FiHeart } from "react-icons/fi";
import { FaiHeart } from "react-icons/fa";

import { WishlistContainer } from '../../../theme/carouselStyle.js';

export default function ActionButton () {
  return (
    <WishlistContainer className='product-card__wishlist-icon-container'>
      <FiHeart />
    </WishlistContainer>
  )
}