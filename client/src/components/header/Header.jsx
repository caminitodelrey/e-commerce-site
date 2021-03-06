import { MdLocalShipping } from 'react-icons/md';
import { GiMountainCave } from 'react-icons/gi';
import { FiHeart, FiShoppingBag, FiGitlab } from 'react-icons/fi';

import React, { useState, useEffect } from 'react';
import Toggle from './Toggle.jsx';
import HeaderSearch from './HeaderSearch.jsx';

import {
  HeaderOuter,
  HeaderInner,
  Logo,
  Nav,
  ThirdInnerContainer,
  WishlistIndicator,
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

export default function Header({
  onClick,
  executeScroll,
  theme,
  themeToggler,
}) {
  const banners = [banner1, banner2];
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const [hasWishlist, setHasWishlist] = useState(false);

  const storedItems = JSON.parse(window.localStorage.getItem('wishlist')) || [];

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
    <div onClick={onClick} data-testid="header">
      <Toggle theme={theme} themeToggler={themeToggler} />
      <HeaderOuter>
        <HeaderInner>
          <Logo>
            <h1>
              <GiMountainCave style={{
                height: '37px',
                width: 'auto',
                paddingRight: '2px',
                color: 'rgb(11, 191, 125)'
              }} />
            </h1>
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
            {storedItems.length > 0 ? (
              <div>
                <WishlistIndicator />
                <WishlistButton onClick={executeScroll} />
                <ShopButton />
              </div>
            ) : (
              <div>
                <WishlistButton onClick={executeScroll} />
                <ShopButton />
              </div>
            )}
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
