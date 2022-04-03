import React, { useState } from 'react';
import Modal from './Modal.jsx';

import { CardAssetImg } from '../../../theme/carouselStyle.js';

export default function ProductImg ({product, mainProduct}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

    return (
      <>
        <div className='product-card__img' onClick={toggleModal}>
          <CardAssetImg src={product.image || 'https://durmazz.com/writable/uploads/products/default.jpg'} />
        </div>

        {modal && (
          <Modal
            toggleModal={toggleModal}
            product={product}
            mainProduct={mainProduct}
          />
        )}
      </>
    )
}