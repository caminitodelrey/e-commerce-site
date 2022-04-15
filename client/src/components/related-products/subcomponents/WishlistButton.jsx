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
  const [isLiked, setIsLiked] = useState(false);

  const storedItems = JSON.parse(window.localStorage.getItem('wishlist'));

  const addToWishlist = () => {
    if (!isLiked) {
      if (storedItems) {
        const itemExists = storedItems.some(
          (obj) => obj.id === product.id,
        );

        if (!itemExists) {
          setWishlistProducts([...wishlistProducts, product]);
          window.localStorage.setItem(
            'wishlist',
            JSON.stringify([...wishlistProducts, product]),
          );
        }
        setIsInLocalStorage(true);
      } else {
        setIsInLocalStorage(false);
        setWishlistProducts([...wishlistProducts, product]);
        window.localStorage.setItem(
          'wishlist',
          JSON.stringify([...wishlistProducts, product]),
        );
      }
      setIsLiked(true);
    } else {
      const stringWishlistProducts = wishlistProducts.map((product) => {
        return JSON.stringify(product);
      });
      const index = stringWishlistProducts.indexOf(
        JSON.stringify(product),
      );

      const newList = [
        ...wishlistProducts.slice(0, index),
        ...wishlistProducts.slice(index + 1),
      ];
      setWishlistProducts(newList);
      localStorage.setItem('wishlist', JSON.stringify(newList));
      setIsLiked(false);
    }
  };

  const accentColor = 'rgb(11,191,125)';

  if (!isLiked) {
    return (
      <AnimatedWishlistButton onClick={() => addToWishlist()} />
    );
  }
  return (
    <FiHeart onClick={() => addToWishlist()} />
  );

};
