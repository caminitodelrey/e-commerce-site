import React, { useState } from 'react';

import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import { ActionButtonContainer } from '../../../theme/buttonStyle.js';

export default function WishlistActionButton({
  product,
  likedProducts,
  setLikedProducts,
}) {
  const [isHovered, iconIsHovered] = useState(false);
  const [disable, setDisable] = useState(false);

  const addToWishlist = (selectedProduct) => () => {
    if (disable === false) {
      if (!window.localStorage.getItem('wishlist')) {
        setLikedProducts([...likedProducts, selectedProduct]);
        window.localStorage.setItem('wishlist', JSON.stringify([...likedProducts, selectedProduct]));
        setDisable(true);
      } else {
        const storedItems = JSON.parse(window.localStorage.getItem('wishlist'));
        const itemExist = storedItems.some((obj) => obj.id === selectedProduct.id);
        if (!itemExist) {
          setLikedProducts([...likedProducts, selectedProduct]);
          window.localStorage.setItem('wishlist', JSON.stringify([...likedProducts, selectedProduct]));
          setDisable(true);
        }
      }
    }
  };

  return (
    <ActionButtonContainer
      onMouseEnter={() => iconIsHovered(!isHovered)}
      onMouseLeave={() => iconIsHovered(!isHovered)}
      onClick={addToWishlist(product)}
      disabled={disable}
    >
      {/* To Do: Change this to css animation */}
      {isHovered && disable === true ? <FaHeart /> : <FiHeart />}
    </ActionButtonContainer>
  );
}
