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
    return (
      <div>
        [Product Info component goes here]
        This is a merging test ✨

      </div>
    )
  }
}

export default ProductInfo;