import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getData } from '../../helper.js';

import { GlobalStyle } from '../theme/globalStyle.js';

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
  const [selectedProduct, setSelectedProduct] = useState({
    "id": 37327,
    "campus": "hr-rfe",
    "name": "Dorris 400 Tank Top",
    "slogan": "Rerum alias numquam nobis rem ex quasi voluptatem veritatis.",
    "description": "Modi et est excepturi occaecati asperiores nulla in dicta et. Ex nihil inventore reprehenderit impedit atque qui. Iusto quis fuga. Velit similique molestiae perferendis ea. Itaque repellendus tenetur enim harum ipsa voluptatem rerum magni. Repellat eligendi qui recusandae quas.",
    "category": "Tank Top",
    "default_price": "830.00",
    "created_at": "2021-08-13T14:37:33.285Z",
    "updated_at": "2021-08-13T14:37:33.285Z",
    "features": [
        {
            "feature": "Buttons",
            "value": "\"Blue Resin\""
        }
    ]
});

  // const handleProductChange = (productId) => {
  //   getData(`products/${productId}`)
  //     .then(({ data }) => {
  //       setSelectedProduct(data);
  //     })
  //     .catch((err) => {
  //       throw Error(err);
  //     })
  // };

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

  useEffect(() => {
    console.log(selectedProduct);
  }, [selectedProduct]);

  return (
    // <>
    // <button onClick={() => handleProductChange(37328)}>Click Me!</button>
    // </>

    <ClickTracker render={(recordClick) => (
      <div data-testid="main">
        <GlobalStyle />
        <Header onClick={(event) => recordClick(event, 'Header')} />
        <ProductInfo onClick={(event) => recordClick(event, 'Product Info')} product={selectedProduct} />
        <RelatedProducts
          product={selectedProduct}
          handleProductChange={handleProductChange}
          onClick={(event) => recordClick(event, 'Related Products')}
        />
        <QA product={selectedProduct} onClick={(event) => recordClick(event, 'Questions and Answers')}/>
        <RatingsReviews product={selectedProduct} onClick={(event) => recordClick(event, 'Ratings and Reviews')}/>
      </div>
    )} />
  );
}
