import React, { useState } from 'react';
// import getData from '../../helper.js';

import { GlobalStyle } from '../theme/globalStyle.js';

import ProductInfo from './product-info/product-info.jsx';
import RelatedProducts from './related-products/RelatedProducts.jsx';
import QA from './QA/QA.jsx';
import RatingsReviews from './ratings-and-reviews/ratings-and-reviews.jsx';

// main eg --> id: 37311
// an example with 6 related products --> id: 37318
// an example with sale price --> id: 37325
export default function App() {
  const [selectedProduct, setSelectedProduct] = useState({
    id: 37325,
    campus: 'hr-rfe',
    name: 'Lela Pants',
    slogan: 'Voluptatum eveniet aliquam magni ratione repudiandae praesentium.',
    description:
      'Blanditiis est aliquam architecto quia. Saepe quis eum. Officiis nihil est.',
    category: 'Pants',
    default_price: '120.00',
    created_at: '2021-08-13T14:37:33.285Z',
    updated_at: '2021-08-13T14:37:33.285Z',
    features: [
      {
        feature: 'Frame',
        value: '"AllLight Composition Resin"',
      },
    ],
  });

  return (
    <>
      <GlobalStyle />
      <ProductInfo product={selectedProduct} />
      <RelatedProducts product={selectedProduct} setMainProduct={setSelectedProduct} />
      <QA product={selectedProduct} />
      <RatingsReviews product={selectedProduct} />
    </>
  );
}
