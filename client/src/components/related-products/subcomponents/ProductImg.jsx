import React, { useState } from 'react';
import { CardAssetImg } from '../../../theme/carouselStyle.js';

export default function ProductImg ({product, mainProduct}) {
    return (
      <>
        <CardAssetImg src={product.image || 'https://durmazz.com/writable/uploads/products/default.jpg'} />
      </>
    )
}