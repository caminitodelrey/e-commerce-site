import React, { useState } from 'react';

import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import { WishlistContainer } from '../../../theme/carouselStyle.js';

export default function ActionButton ({product}) {

  const [isHovered, iconIsHovered] = useState(false);

  return (
    <>
      <WishlistContainer
        onMouseEnter={() => iconIsHovered(!isHovered)}
        onMouseLeave={() => iconIsHovered(!isHovered)}
        >

          {isHovered ? (
            <FaHeart />
          ) : (
            <FiHeart />
          )}

      </WishlistContainer>
    </>
  )
}