import React, { useState } from 'react';

import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import { ActionButtonContainer } from '../../../theme/carouselStyle.js';

export default function ActionButton({ products, product, setSelectedProduct }) {
  const [isHovered, iconIsHovered] = useState(false);

  const addToWishlist = (selectedProduct) => () => {
    setSelectedProduct([...products, selectedProduct]);
    window.localStorage.setItem('wishlist', JSON.stringify([...products, selectedProduct]));
    console.log('saved to localStorage');
  };

  return (
    <ActionButtonContainer
      onMouseEnter={() => iconIsHovered(!isHovered)}
      onMouseLeave={() => iconIsHovered(!isHovered)}
      onClick={addToWishlist(product)}
    >
      {isHovered ? <FaHeart /> : <FiHeart />}
    </ActionButtonContainer>
  );
}
