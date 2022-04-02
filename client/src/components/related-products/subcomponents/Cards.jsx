import React from 'react';
import { Card, CarouselImage } from '../../../style/Carousel.js';

function Cards ({ products }) {

    console.log(products)

    if (products.length >= 4) {
      return (
        <div>
          {products[0].category}
        </div>
      )
    }

}

export default Cards;