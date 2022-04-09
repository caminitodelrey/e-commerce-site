import styled from 'styled-components';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';

// Shrinking Header
export const HeaderOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: -30;
  height: 100px;
  width: 100%;
  background-color: #fff;
  /* color: rgb(25, 46, 64); */
`;

export const HeaderInner = styled(HeaderOuter)`
  position: sticky;
  top: 0;
  height: 70px;
  padding: 5px 30px;
`;

export const Logo = styled.div`
  > h1 {
    color: black;
  }
`;

export const Nav = styled.p`
  display: inline-block;
  vertical-align: middle;
  margin-right: 30px;
  margin-left: 30px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: rgb(3, 115, 83);
  }
`;

export const ThirdInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Search = styled.div`
  position: absolute;
  right: 120px;

  > input {
    padding: 12px;
    outline: none;
    border: none;
    border-radius: 20px;
    background-color: rgb(245, 245, 245);
    font-size: .9em;
    color: rgb(3, 115, 83);

    ::placeholder {
      color: rgb(200, 200, 200);
    }

    &:hover {
      background-color: rgb(229, 229, 229);
      ::placeholder {
        color: rgb(120, 120, 120);
      }
    }
  }
`;

export const WishlistButton = styled(FiHeart)`
  color: rgb(25, 46, 64);
  width: 20px;
  height: 20px;
  padding: 0 20px 0 110px;

  &:hover {
    color: rgb(25, 46, 64);
    fill: rgba(11, 191, 125, .7);
    cursor: pointer;
  }
`;

export const ShopButton = styled(FiShoppingBag)`
  color: rgb(25, 46, 64);
  width: 20px;
  height: 20px;

  &:hover {
    color: rgb(25, 46, 64);
    fill: rgba(11, 191, 125, .7);
    cursor: pointer;
  }
`;

// Banner Slider
export const Slideshow = styled.div`
  top: 50px;
  height: 58px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  background-color: rgb(245, 245, 245);
`;

export const BannerSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;

export const Slide = styled.div`
  width: 100%;
  display: inline-block;
  align-items: center;
  justify-content: center;
`;

export const BannerText = styled.p`
  text-align: center;
  line-height: .5;
  color: black;
  font-weight: 700;
  font-size: .9em;
`;

export const BannerLink = styled.p`
  text-align: center;
  line-height: .5;
  color: black;
  font-size: .7em;
  text-decoration: underline;
  cursor: pointer;
`;