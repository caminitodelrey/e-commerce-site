import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import React, { useState } from 'react';

import { ActionButtonContainer } from '../../../theme/buttonStyle.js';

export default function WishlistButton({
  product,
  wishlistProducts,
  setWishlistProducts,
}) {
  const [isHovered, iconIsHovered] = useState(false);
  const [disable, setDisable] = useState(false);

  const addToWishlist = (selectedProduct) => () => {
    if (disable === false) {
      if (!window.localStorage.getItem('wishlist')) {
        setWishlistProducts([...wishlistProducts, selectedProduct]);
        window.localStorage.setItem('wishlist', JSON.stringify([...wishlistProducts, selectedProduct]));
        setDisable(true);
      } else {
        const storedItems = JSON.parse(window.localStorage.getItem('wishlist'));
        const itemExist = storedItems.some((obj) => obj.id === selectedProduct.id);
        if (!itemExist) {
          setWishlistProducts([...wishlistProducts, selectedProduct]);
          window.localStorage.setItem('wishlist', JSON.stringify([...wishlistProducts, selectedProduct]));
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
