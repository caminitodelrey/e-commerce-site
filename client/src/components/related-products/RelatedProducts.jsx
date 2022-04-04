import React from 'react';
import axios from 'axios';
import getData from '../../../helper.js';

import { Carousels } from '../../theme/carouselStyle.js';

import RelatedCarousel from './carousels/RelatedCarousel.jsx';
import WishlistCarousel from './carousels/WishlistCarousel.jsx';

// products/37311/related
// product_id: 37311 - 38199

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'pending',
      relatedProducts: [],
      selectedProducts: [{
        image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        category: 'pants',
        name: 'Morning Joggers',
        price: '40.00',
        sale: null,
        rating: { 1: '1', 2: '2', 3: '1', 4: '5', 5: '3'}
      }]
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
                id: data[0].data.id,
                image: data[1].data.results[0].photos[0].url,
                category: data[0].data.category,
                name: data[0].data.name,
                price: data[1].data.results[0].original_price,
                sale: data[1].data.results[0].sale_price,
                rating: data[2].data.ratings
              }

              relatedProducts.push(product);

              this.setState({
                status: 'resolved',
                relatedProducts: relatedProducts
              })
            });
        });
      })
      .catch(err => {
        this.setState({
          status: 'rejected'
        })
        console.error('getRelatedProducts Error:', err);
      })
  }

  componentDidMount() {
    this.getRelatedProducts();
  }

  render() {
    let { status, relatedProducts, selectedProducts } = this.state;

    if (status === 'pending') {
      return <div>Loading...</div>
    }

    if (status === 'resolved') {
      return (
        <Carousels className='carousel'>
          <div className='related-header'>
            <h2>COMPLETE THE LOOK</h2>
          </div>
          <RelatedCarousel
            products={relatedProducts}
            mainProduct={this.props.product}
            show={4}
            />

          <div className='selected-header'>
            <h2>WISHLIST</h2>
          </div>
          <WishlistCarousel products={selectedProducts}/>
        </Carousels>
      )
    }

    if (status === 'rejected') {
      return (
        <div>
          <div>We are sorry. There was a problem loading products to complete the look.</div>
        </div>
      )
    }
  }
}