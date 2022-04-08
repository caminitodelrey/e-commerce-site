import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import React, { useState } from 'react';
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
    const itemExists = storedItems.some(
      (obj) => obj.id === selectedProduct.id,
    );
    if (!itemExists) {
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

  // heart render
  // initial state => AnimatedWishlistButton
  // once clicked => FaHeart
  // item removed from localStorage => AnimatedWishlistButton
  // --> if change is detected in localStorage
  // --> check if the items with hearts are still in the storage
  // --> if not, change the heart to the default state


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
