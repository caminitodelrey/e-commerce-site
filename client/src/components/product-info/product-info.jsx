import React from 'react';
import axios from 'axios';
import getData from '../../../helper.js';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world'
    }
  }

  render() {
    const product = this.props.product;
    return (
      <div>
        <p>rating goes here</p>
        <p>{product.category}</p>
        <p>{product.title}</p>

      </div>
    )
  }
}

export default ProductInfo;