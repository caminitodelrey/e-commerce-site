import React from 'react';
import axios from 'axios';
import getData from '../../helper.js';

import styled from 'styled-components';

import ProductInfo from './product-info/product-info.jsx';
import RelatedProducts from './related-products/RelatedProducts.jsx';
import QA from './QA/QA.jsx';
import RatingsReviews from './ratings-and-reviews/ratings-and-reviews.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedProduct: {
        "id": 37318,
        "campus": "hr-rfe",
        "name": "YEasy 350",
        "slogan": "Just jumped over jumpman",
        "description": "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
        "category": "Kicks",
        "default_price": "450.00",
        "created_at": "2021-08-13T14:37:33.145Z",
        "updated_at": "2021-08-13T14:37:33.145Z",
        "features": [
          {
            "feature": "Sole",
            "value": "Rubber"
          },
          {
            "feature": "Material",
            "value": "FullControlSkin"
          },
          {
            "feature": "Stitching",
            "value": "Double Stitch"
          }
        ]
      }
    }
  }

  // componentDidMount() {
  //   getData('products/37311')
  //     .then(res => {
  //       this.setState({selectedProduct: res.data});
  //     })
  //     .catch(err => console.log('didmount error: ', err));
  // }

  render () {
    return (
      <>
        <ProductInfo product={this.state.selectedProduct}/>
        <RelatedProducts product={this.state.selectedProduct}/>
        <QA product={this.state.selectedProduct}/>
        <RatingsReviews product={this.state.selectedProduct}/>
      </>
    )
  }
}