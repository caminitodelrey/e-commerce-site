import React from 'react';

import { CardAssetImg } from '../../../theme/carouselStyle.js';

export default class ProductImg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='product-card__img'>
        <CardAssetImg src={this.props.product.image || 'https://durmazz.com/writable/uploads/products/default.jpg'} />
      </div>
    )
  }
}