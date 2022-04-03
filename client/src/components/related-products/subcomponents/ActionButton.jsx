import React from 'react';

import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import { CardContainer, CardsContainer, CardAssetContainer, CardAssetImg, WishlistContainer } from '../../../theme/carouselStyle.js';

export default function ActionButton (props) {
  return (
    <WishlistContainer>
      <FiHeart />
    </WishlistContainer>
  )
}