import { MdOutlineClose } from 'react-icons/md';

import React from 'react';

export default function RemoveButton({
  clickedProduct,
  wishlistProducts,
  setWishlistProducts,
}) {
  const removeWishlist = () => () => {
    // get the index of the clickedProduct from wishlistProducts
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
      <MdOutlineClose onClick={removeWishlist()} />
    </div>
  );
}
