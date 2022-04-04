import React, { useState } from 'react';
import { CardAssetImg } from '../../../theme/carouselStyle.js';

export default function ProductImg ({product, mainProduct}) {

  return (
      <>
        {/* <CardAssetImg src={product.image || 'https://durmazz.com/writable/uploads/products/
        default.jpg'} /> */}
        <CardAssetImg src={product.image || 'https://images.unsplash.com/photo-1555617117-08d2a80f6aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'} />
      </>
    )
}