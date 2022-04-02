import React from 'react';
import axios from 'axios';
import getData from '../../../helper.js';

import { GlobalFont } from '../../theme/globalStyle.js';
import { Carousel } from '../../theme/carouselStyle.js';

import Cards from './subcomponents/Cards.jsx';

// products/37311/related
// product_id: 37311 - 38199

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: []
    }
  }

  getRelatedProducts() {
    getData(`products/${this.props.product.id}/related`)
      // by passing data in {} an array of IDs is returned
      .then(({data}) => {
        data.map(id => {
          // Why is the order between Accessories and Pants changing randomly?
          Promise.all([
            getData(`products/${id}`),
            getData(`products/${id}/styles`),
            getData(`reviews/meta?product_id=${id}`)
          ])
            .then(data => {
              let relatedProducts = [...this.state.relatedProducts];

              let product = {
                image: data[1].data.results[0].photos[0].url,
                category: data[0].data.category,
                name: data[0].data.name,
                price: data[1].data.results[0].original_price,
                sale: data[1].data.results[0].sale_price,
                rating: data[2].data.ratings
              }

              relatedProducts.push(product);

              this.setState({
                relatedProducts: relatedProducts
              })
            });
        });
      })
      .catch(err => {
        console.error('getRelatedProducts Error:', err);
      })
  }

  componentDidMount() {
    this.getRelatedProducts();
  }

  render() {

    let { relatedProducts } = this.state;

    return (
      <Carousel className='carousel'>
        <div className='related-header'>
          <h1>RELATED PRODUCTS</h1>
        </div>
        <Cards products={relatedProducts}/>
      </Carousel>
    )
  }
}