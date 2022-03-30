import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ProductInfo from './product-info/product-info.jsx';
import RelatedProducts from './related-products/related-products.jsx';
import QuestionsAnswers from './questions-answers/questions-answers.jsx';
import RatingsReviews from './ratings-and-reviews/ratings-and-reviews.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        test
        {/* <MainWrapper>
          <p>Example Text</p>
        </MainWrapper> */}

        <ProductInfo />
        <RelatedProducts />
        <QuestionsAnswers />
        <RatingsReviews />
      </div>
    )
  }
}

const MainWrapper = styled.div`
  background: blue
`