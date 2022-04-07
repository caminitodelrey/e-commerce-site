import React from 'react';
import { MdOutlineClose } from 'react-icons/md';

import { ActionButtonContainer } from '../../../theme/buttonStyle.js';

export default function RemoveButton({
  clickedProduct,
  selectedProducts,
  setSelectedProduct,
}) {
  const removeWishlist = () => () => {
    // get the index of the clickedProduct from selectedProducts
    const index = selectedProducts.indexOf(clickedProduct);
    const newList = [...selectedProducts.slice(0, index), ...selectedProducts.slice(index + 1)];
    setSelectedProduct(newList);
    localStorage.setItem('wishlist', JSON.stringify(newList));
  };

  return (
    <ActionButtonContainer onClick={removeWishlist()}>
      <MdOutlineClose />
    </ActionButtonContainer>
  );
}
