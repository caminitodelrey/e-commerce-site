import { MdLocalShipping } from 'react-icons/md';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';

import React, { useState, useEffect } from 'react';
import HeaderSearch from './HeaderSearch.jsx';

import {
  HeaderOuter,
  HeaderInner,
  Logo,
  Nav,
  ThirdInnerContainer,
  WishlistButton,
  ShopButton,
  Slideshow,
  BannerSlider,
  Slide,
  BannerText,
  BannerLink,
} from '../../theme/headerStyle.js';

const banner1 = (
  <Slide key={Math.random()}>
    <BannerText>
      Free Shipping + Returns, Free Membership, Exclusive Products
    </BannerText>
    <BannerLink>Join Now</BannerLink>
  </Slide>
);

const banner2 = (
  <Slide key={Math.random()}>
    <BannerText>Save Up to 40%</BannerText>
    <BannerLink>Shop All Our New Markdowns</BannerLink>
  </Slide>
);

export default function Header(props) {
  const banners = [banner1, banner2];
  const delay = 2500;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    );
    return () => {};
  }, [index]);

  return (
    <div onClick={props.onClick}>
      <HeaderOuter>
        <HeaderInner>
          <Logo>
            <h1>CAMINITO</h1>
          </Logo>

          <div>
            <Nav>New Releases</Nav>
            <Nav>Men</Nav>
            <Nav>Women</Nav>
            <Nav>Kids</Nav>
          </div>

          <ThirdInnerContainer>
            <HeaderSearch />
            <div>
              <WishlistButton />
              <ShopButton />
            </div>
          </ThirdInnerContainer>

        </HeaderInner>
      </HeaderOuter>

      <Slideshow>
        <BannerSlider
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {banners.map((banner) => banner)}
        </BannerSlider>
      </Slideshow>
    </div>
  );
}
