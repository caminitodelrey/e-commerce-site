import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ProductInfo from './product-info/product-info.jsx';
import RelatedProducts from './related-products/related-products.jsx';
import QA from './qa/qa.jsx';
import RatingsReviews from './ratings-and-reviews/ratings-and-reviews.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        {/* <MainWrapper>
          <p>Example Text</p>
        </MainWrapper> */}

        <ProductInfo />
        <RelatedProducts />
        <QA />
        <RatingsReviews />
      </div>
    )
  }
}

const MainWrapper = styled.div`
  background: blue
`