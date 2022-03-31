import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import getData from '../../helper.js';

import ProductInfo from './product-info/product-info.jsx';
import RelatedProducts from './related-products/related-products.jsx';
import QA from './qa/qa.jsx';
import RatingsReviews from './ratings-and-reviews/ratings-and-reviews.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      selectedProduct: []
    }
  }

  render () {
    return (
      <div>
        <ProductInfo products={this.state.products}/>
        <RelatedProducts product={this.state.selectedProduct}/>
        <QA product={this.state.selectedProduct}/>
        <RatingsReviews product={this.state.selectedProduct}/>
      </div>
    )
  }
}