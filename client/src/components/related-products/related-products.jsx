import React from 'react';
import axios from 'axios';
import getData from '../../../helper.js';

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world'
    }
  }

  // Product-id: 37311 to 38321

  render() {
    return (
      <div>
        [Related Product]
      </div>
    )
  }
}
