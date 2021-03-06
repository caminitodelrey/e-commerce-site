import { MdOutlineClose } from 'react-icons/md';

import React from 'react';
import { AnimateRemoveButton } from '../../../theme/buttonStyle.js';

export default function RemoveButton({
  clickedProduct,
  wishlistProducts,
  setWishlistProducts,
}) {
  const removeWishlist = () => () => {
    const index = wishlistProducts.indexOf(clickedProduct);
    const newList = [
      ...wishlistProducts.slice(0, index),
      ...wishlistProducts.slice(index + 1),
    ];
    setWishlistProducts(newList);
    localStorage.setItem('wishlist', JSON.stringify(newList));
  };
  return (
    <div>
      <AnimateRemoveButton onClick={removeWishlist()} />
    </div>
  );
}
