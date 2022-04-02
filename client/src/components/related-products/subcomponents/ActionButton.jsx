import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { WishlistContainer } from '../../../theme/carouselStyle.js';

export default function ActionButton () {
  return (
    <WishlistContainer className='product-card__wishlist-icon-container'>
      <FontAwesomeIcon icon={faHeart} />
    </WishlistContainer>
  )
}