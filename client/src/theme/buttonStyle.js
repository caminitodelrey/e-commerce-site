import styled, { keyframes, css } from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';

// Carousel Chevrons
export const ChevronsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Chevron = styled.button`
  z-index: 1;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgb(50, 78, 89);
  color: color: rgb(50, 78, 89);
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DeactivatedChevron = styled(Chevron)`
  color: rgba(128, 128, 128, 0.5);
  border: 2px solid rgba(128, 128, 128);

  &:hover {
    cursor: default;
  }
`;

// Thumbnail Carousel Chevrons
export const SmLeftChevron = styled.button`
  z-index: 3;
  position: absolute;
  top: 25px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  border: unset;
  border-radius: 2px;
  background-color: rgba(225, 225, 225, 0.8);
  color: rgb(11, 191, 125);
  cursor: pointer;
`;

export const SmRightChevron = styled(SmLeftChevron)`
  right: -0px;
`;

// Compare button
export const CompareButtonContainer = styled.div`
  position: absolute;
  bottom: 83px;
  transform: translateX(160px);
`;

export const CompareButton = styled.button`
  border: 1px solid rgba(11, 191, 125, 0.9);
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  padding: 8px 15px;
  color: rgba(11, 191, 125, 0.9);
  background-color: transparent;
  box-shadow: 5px 5px 12px -5px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: rgba(11, 191, 125, 0.9);
    box-shadow: 0px 5px 10px rgba(46, 229, 157, 0.4);
  }
`;

// Wishlist and Remove buttons container
export const ActionButtonContainer = styled.div`
  position: absolute;
  top: 0%;
  transform: translateX(624%);
  padding: 10px 10px 7px 10px;
  border-radius: 0 6px;
  background: #fff;
  color: rgba(11, 191, 125);

  &:hover {
    cursor: pointer;
  }
`;

// Remove Button
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AnimateRemoveButton = styled(MdOutlineClose)`
  color: rgba(11, 191, 125);
  &:hover {
    animation: ${rotation} 2s infinite linear;
  }
`;

// Wishlist Button
const heartbeat = keyframes`
  0% {
    transform: rotate();
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
`;

export const AnimatedWishlistButton = styled(FiHeart)`
  color: rgba(11, 191, 125, 0.9);
  cursor: pointer;

  &:hover {
    animation: ${heartbeat} 1s infinite;
    fill: rgba(11, 191, 125, 0.9);
    color: rgba(11, 191, 125, 0.9);
    opacity: 1;
    transition: opacity 500mx;
  }
`;

// Wishlist Carousel - Default Card Button
export const DefaultCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 355px;
  min-width: 255px;
  margin-right: 30px;
  align-items: center;
  border-radius: 10px;
  border: 3px solid rgba(128, 128, 128, 0.2);
`;

export const DefaultCardButton = styled.button`
  position: relative;
  top: 150px;
  height: 50px;
  min-width: 50px;
  text-align: center;
  text-decoration: none;
  padding: 15px;
  border-radius: 30px;
  border: 2px solid rgba(11, 191, 125, 0.9);
  color: rgba(11, 191, 125, 0.9);
  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: rgba(11, 191, 125, 0.9);
    box-shadow: 0px 5px 10px rgba(46, 229, 157, 0.4);
  }

  &:active {
    box-shadow: inset 6px 6px 5px 1px rgba(37, 167, 115, 0.7);
  }
`;

// Ratings & Reviews
export const ButtonDefaultLG = styled.button`
  margin-right: 30px;
  height: 50px;
  width: auto;
  min-width: 120px;
  text-align: center;
  text-decoration: none;
  padding: 15px;
  border-radius: 30px;
  border: 2px solid rgba(11, 191, 125, 0.9);
  color: rgba(11, 191, 125, 0.9);
  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: rgba(11, 191, 125, 0.9);
    box-shadow: 0px 5px 10px rgba(46, 229, 157, 0.4);
  }

  &:active {
    box-shadow: inset 6px 6px 5px 1px rgba(37, 167, 115, 0.7);
  }
`;

export const ButtonDefaultSM = styled.button`
  border: 1px solid rgba(11, 191, 125, 0.9);
  border-radius: 15px;
  margin-right: 10px;
  text-align: center;
  text-decoration: none;
  padding: 8px 15px;
  margin: 10px 10px 10px 0;
  color: rgba(11, 191, 125, 0.9);
  background-color: transparent;
  box-shadow: 5px 5px 12px -5px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: rgba(11, 191, 125, 0.9);
    box-shadow: 0px 5px 10px rgba(46, 229, 157, 0.4);
  }
`;

export const ReportClicked = styled.button`
  border: none;
  border-radius: 15px;
  margin-right: 10px;
  text-align: center;
  text-decoration: none;
  padding: 8px 15px;
  color: #fff;
  background-color: red;
  box-shadow: 5px 5px 12px -5px rgba(0, 0, 0, 0.2);
`;

export const HelpfulClicked = styled.button`
  border: none;
  border-radius: 15px;
  margin-right: 10px;
  text-align: center;
  text-decoration: none;
  padding: 8px 15px;
  color: rgba(11, 191, 125, 0.9);
  background-color: transparent;
  box-shadow: 5px 5px 12px -5px rgba(0, 0, 0, 0.2);
`;
