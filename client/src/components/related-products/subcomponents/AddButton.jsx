import { BsPlusLg } from 'react-icons/bs';

import React, { useState, useEffect } from 'react';
import getData from '../../../../helper.js';

import {
  DefaultCardButton,
} from '../../../theme/buttonStyle.js';

export default function AddButton({
  product,
  wishlistProducts,
  setWishlistProducts,
}) {
  const [disable, setDisable] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  // product data being passed down is a raw data, so refactor it
  const getCurrentProduct = () => {
    Promise.all([
      getData(`products/${product.id}`),
      getData(`products/${product.id}/styles`),
      getData(`reviews/meta?product_id=${product.id}`),
    ]).then((productArr) => {
      setCurrentProduct({
        id: productArr[0].data.id,
        image: productArr[1].data.results[0].photos[0].url,
        category: productArr[0].data.category,
        name: productArr[0].data.name,
        price: productArr[1].data.results[0].original_price,
        sale: productArr[1].data.results[0].sale_price,
        rating: productArr[2].data.ratings,
      });
    })
      .catch((err) => {
        throw Error(err);
      });
  };

  useEffect(() => {
    setCurrentProduct([]);
    getCurrentProduct();
  }, [product]);

  const addToWishlist = (selectedProduct) => () => {
    const storedItems = JSON.parse(window.localStorage.getItem('wishlist'));
    const itemExists = storedItems.some(
      (obj) => obj.id === selectedProduct.id,
    );

    if (itemExists) {
      setDisable(false);
    } else {
      setWishlistProducts([...wishlistProducts, selectedProduct]);
      window.localStorage.setItem(
        'wishlist',
        JSON.stringify([...wishlistProducts, selectedProduct])
      );
    }
  };

  return (
    <div>
      <DefaultCardButton
        type="submit"
        onClick={addToWishlist(currentProduct)}
        disabled={disable}
      >
        <BsPlusLg />
        &nbsp;
        ADD CURRENT OUTFIT
      </DefaultCardButton>
    </div>
  );
}
