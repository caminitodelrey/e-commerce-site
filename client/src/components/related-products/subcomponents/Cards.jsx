import React from 'react';
// import { Card, CarouselImage } from '../../../style/Carousel.js';

export default function Cards ({ products }) {

  const Card = products.map((product) =>
    <div key={product.toString()}>
      <div className='img-container'>
        <img src={product.image || 'https://durmazz.com/writable/uploads/products/default.jpg'} />
      </div>

      <div className='description'>
        {product.category} <br/>
        {product.name} <br/>
        $ {product.price} <br/>
        {/* add rating */}
      </div>

    </div>
  );

  return (
    <div className='card-container'>
      {Card}
    </div>
  );

}