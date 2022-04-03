import React, { useState } from 'react';

import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import { WishlistContainer, Rotate } from '../../../theme/carouselStyle.js';

export default function ActionButton (props) {

  const [isHovered, iconIsHovered] = useState(false);

  return (
    <>
      <WishlistContainer
        onMouseOver={() => iconIsHovered(!isHovered)}
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