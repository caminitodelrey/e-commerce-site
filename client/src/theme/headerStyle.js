import styled, { keyframes } from 'styled-components';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';

// Dark/Light Mode Toggle
export const ToggleContainer = styled.div`
  display: grid;
  place-items: end;
  position: relative;
  padding: 20px 30px 0 0;
  background: ${({ theme }) => theme.body};
`;

const reverse = keyframes`
  0% {
    left: 22px;
    width: 8px;
  }
  60% {
    left: 10px;
    width: 19px;
  }
  100% {
    left: -3px;
  }
`;

const toggleTheme = keyframes`
  0% {
    left: -3px;
  }
  60% {
    left: -3px;
    width: 19px;
  }
  100% {
    left: 21px;
    width: 8px;
  }
`;

export const ToggleLabel = styled.label`
  width: 35px;
  height: 10px;
  display: flex;
  position: relative;
  transition: all 350ms ease-in;
  border-radius: 100px;
  border: 5px solid rgb(25, 46, 64);
  background: rgba(25, 46, 64, .9);

  :before {
    animation-name: ${reverse};
    animation-duration: 350ms;
    animation-fill-mode: forwards;
    transition: all 350ms ease-in;
    content: '';
    width: 8px;
    height: 8px;
    top: -3px;
    left: -3px;
    position: absolute;
    border-radius: 50%;
    border: 4px solid rgb(225, 220, 220);
    background: rgb(225, 225, 255);
  }
`;

export const ToggleInput = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;
  z-index: 2;
  right: 30px;
  width: 50px;

  &:checked + ${ToggleLabel} {
    border: 5px solid rgb(245, 245, 245);
    background: rgb(255, 255, 255);
  }

  &:checked + ${ToggleLabel}:before {
    border: 5px solid rgb(10, 89, 81);
    background: rgba(10, 89, 81, .9);
    top: -4px;
    animation-name: ${toggleTheme};
    animation-duration: 350ms;
    animation-fill-mode: forwards;
  }
`;

// Shrinking Header
export const HeaderOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: -30;
  height: 80px;
  width: 100%;
  background: ${({ theme }) => theme.body};
  /* color: rgb(25, 46, 64); */
`;

export const HeaderInner = styled(HeaderOuter)`
  position: sticky;
  top: 0;
  height: 50px;
  padding: 5px 30px;
`;

export const Logo = styled.div`
  > h1 {
    color: ${({ theme }) => theme.logo};
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
  > input {
    outline: none;
    border: none;
    border-radius: 20px;
    background-color: rgb(245, 245, 245);
    font-size: .9em;
    color: rgb(3, 115, 83);

    ::placeholder {
      color: rgb(169, 169, 169);
    }
  }
`;

export const HeaderSearch = styled(Search)`
  position: absolute;
  right: 120px;

  > input {
    padding: 12px;
  }
`;

export const QASearch = styled(Search)`
  position: relative;
  margin: 30px 0;
  width: 100vw;

  > input {
    padding: 20px;
  }
`;

export const WishlistIndicator = styled.div`
  position: absolute;
  right: 68px;
  width: 7px;
  height: 7px;
  background-color: red;
  border-radius: 50%;
`;

export const WishlistButton = styled(FiHeart)`
  color: ${({ theme }) => theme.icons};
  width: 20px;
  height: 20px;
  padding: 0 20px 0 110px;

  &:hover {
    color: ${({ theme }) => theme.icons};
    fill: rgba(11, 191, 125, .7);
    cursor: pointer;
  }
`;

export const ShopButton = styled(FiShoppingBag)`
  color: ${({ theme }) => theme.icons};
  width: 20px;
  height: 20px;

  &:hover {
    color: ${({ theme }) => theme.icons};
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