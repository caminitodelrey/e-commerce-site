import React, { useState } from 'react';

import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import { ActionButtonContainer } from '../../../theme/carouselStyle.js';

export default function ActionButton ({product}) {

  const [isHovered, iconIsHovered] = useState(false);

  return (
    <>
      <ActionButtonContainer
        onMouseEnter={() => iconIsHovered(!isHovered)}
        onMouseLeave={() => iconIsHovered(!isHovered)}
        >

          {isHovered ? (
            <FaHeart />
          ) : (
            <FiHeart />
          )}

      </ActionButtonContainer>
    </>
  )
}