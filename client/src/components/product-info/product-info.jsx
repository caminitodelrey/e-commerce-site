import React from 'react';
import axios from 'axios';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world'
    }
  }

  render() {
    return (
      <div>
        [Product Info component goes here]
      </div>
    )
  }
}

export default ProductInfo;