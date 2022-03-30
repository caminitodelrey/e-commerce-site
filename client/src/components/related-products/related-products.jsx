import React from 'react';
import axios from 'axios';

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world'
    }
  }

  render() {
    return (
      <div>
        Related Products Section
      </div>
    )
  }
}
