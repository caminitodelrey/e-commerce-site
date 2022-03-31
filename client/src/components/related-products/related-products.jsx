import React from 'react';
import axios from 'axios';
import getData from '../../../helper.js';

// products/37311/related
// product_id: 37311 - 38199

/*
//**  Product 37311
{
  "id": 37311,
  "campus": "hr-rfe",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-08-13T14:37:33.145Z",
  "updated_at": "2021-08-13T14:37:33.145Z",
  "features": [
    {
      "feature": "Fabric",
      "value": "Canvas"
    },
    {
      "feature": "Buttons",
      "value": "Brass"
    }
  ]
}

//**  Related products for 37311
[
  37312,
  37313,
  37318,
  37317
]
*/

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }

  render() {
    return (
      <div>
        <h1> Related Product </h1>

      </div>
    )
  }
}
