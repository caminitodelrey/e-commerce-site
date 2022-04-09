import { MdLocalShipping } from 'react-icons/md';
import React, { useState, useEffect } from 'react';
import { HeaderOuter, HeaderInner, Slideshow, BannerSlider } from '../../theme/headerStyle.js';

export default function Header() {

  const banner1 = (
    <div>
      <p>Free Shipping + Returns, Free Membership, Exclusive Products</p>
      <p>Join Now</p>
    </div>
  );

  const banner2 = (
    <div>
      <p>Save Up to 40%</p>
      <p>Shop All Our New Markdowns</p>
    </div>
  );

  return (
    <>
      <HeaderOuter>
        <HeaderInner>
          Logo, Dark/Light Mode Toggle, Search bar
        </HeaderInner>
      </HeaderOuter>

      <Slideshow>
          <BannerSlider>
            {banner1}
          </BannerSlider>
      </Slideshow>
    </>
  )
}