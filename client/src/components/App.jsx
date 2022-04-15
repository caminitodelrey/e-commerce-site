import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import {ThemeProvider} from "styled-components";
import { GlobalStyle, WidgetsContainer, lightTheme, darkTheme } from '../theme/globalStyle.js';

import Header from './header/Header.jsx';
import ProductInfo from './product-info/product-info.jsx';
import RelatedProducts from './related-products/RelatedProducts.jsx';
import QA from './QA/QA.jsx';
import RatingsReviews from './ratings-and-reviews/ratings-and-reviews.jsx';
import ClickTracker from './ClickTracker.jsx';

// main eg --> id: 37327
// an example with 6 related products --> id: 37318
// an example with sale price --> id: 37325
export default function App() {
  const wishlistRef = useRef(null);
  const [theme, setTheme] = useState('light');
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({
    "id": 37311,
    "campus": "hr-rfe",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z",
    "features": [
      {
        "feature": "Fabric",
        "value": "Canvas"
      },
      {
        "feature": "Buttons",
        "value": "Brass"
      }
    ]
  });

  const executeScroll = () => {
    wishlistRef.current.scrollIntoView();
  };

  const handleProductChange =(productId) => {
    // axios.get('/product', { params: { productId: productId }})
    axios({
      method: 'get',
      url: '/product',
      params: { productId: productId }
    })
    .then(({ data }) => {
      setSelectedProduct(data);
    })
    .catch((err) => {
      console.log('error on client side')
    });
  }

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ClickTracker render={(recordClick) => (
        <div data-testid="main" >
          <GlobalStyle />
          <Header
            onClick={(event) => recordClick(event, 'Header')}
            executeScroll={executeScroll}
            theme={theme}
            themeToggler={themeToggler}
          />
          <WidgetsContainer>
            <ProductInfo
              onClick={(event) => recordClick(event, 'Product Info')} product={selectedProduct}
              wishlistProducts={wishlistProducts}
              setWishlistProducts={setWishlistProducts}
            />
            <RelatedProducts
              ref={wishlistRef}
              product={selectedProduct}
              handleProductChange={handleProductChange}
              wishlistProducts={wishlistProducts}
              setWishlistProducts={setWishlistProducts}
              onClick={(event) => recordClick(event, 'Related Products')}
            />
            <QA product={selectedProduct} onClick={(event) => recordClick(event, 'Questions and Answers')}/>
            <RatingsReviews product={selectedProduct} onClick={(event) => recordClick(event, 'Ratings and Reviews')}/>
          </WidgetsContainer>
        </div>
      )} />
    </ThemeProvider>
  );
}
