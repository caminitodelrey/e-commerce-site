import { BsPlusLg } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  const handleServerRoutes = (url, id) => (
    axios({
      method: 'get',
      url: url,
      params: {
        productId: id,
      }
    })
  );

  const getCurrentProduct = () => {
    Promise.all([
      handleServerRoutes('/product', product.id),
      handleServerRoutes('/product/styles', product.id),
      handleServerRoutes('/product/reviews', product.id),
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
      console.log('err in add button');
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
        ADD CURRENT ITEM
      </DefaultCardButton>
    </div>
  );
}
