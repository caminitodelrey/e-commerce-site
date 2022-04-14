import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import React, { useState, useEffect } from 'react';
import RemoveButton from './RemoveButton.jsx';

import {
  AnimatedWishlistButton,
} from '../../../theme/buttonStyle.js';

export default function WishlistButton({
  product,
  wishlistProducts,
  setWishlistProducts,
}) {
  const [disable, setDisable] = useState(false);
  const [isInLocalStorage, setIsInLocalStorage] = useState(false);

  const storedItems = JSON.parse(window.localStorage.getItem('wishlist'));

  const addToWishlist = (selectedProduct) => () => {
    if (storedItems) {
      const itemExists = storedItems.some(
        (obj) => obj.id === selectedProduct.id,
      );
      setIsInLocalStorage(true);
    } else {
      setIsInLocalStorage(false);
    }

    if (!isInLocalStorage) {
      setWishlistProducts([...wishlistProducts, selectedProduct]);
      window.localStorage.setItem(
        'wishlist',
        JSON.stringify([...wishlistProducts, selectedProduct]),
      );
      setIsInLocalStorage(true);
      setDisable(!disable);
    }
    setIsInLocalStorage(true);
    setDisable(!disable);
  };

  // useEffect(() => {
  //   addToWishlist()
  // }, [storedItems])

  switch (isInLocalStorage) {
    case true:
      return (
        <div
          onClick={addToWishlist(product)}
          role="button"
          disabled={disable}
        >
          <FaHeart />
        </div>
      )
    case false:
      return (
        <div
          onClick={addToWishlist(product)}
          role="button"
          disabled={disable}
        >
          <AnimatedWishlistButton />
        </div>
      )
  }
};
