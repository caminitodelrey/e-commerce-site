import styled, { keyframes } from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';

// Carousel Chevrons
const Chevron = styled.button`
  z-index: 1;
  position: absolute;
  top: 50%;
  width: 47px;
  height: 45px;
  transform: translate(-50%);
  border: 1px solid black;
  background-color: white;
  color: rgba(10, 89, 51);
  cursor: pointer;
`;

export const LeftChevron = styled(Chevron)`
  left: -80px;
  `;

export const RightChevron = styled(Chevron)`
  right: -80px;
  `;

// Wishlist Carousel Chevrons
export const WishlistLeftChevron = styled(Chevron)`
  top: 40%;
  right: -80px;
`;

export const DeactivatedRightChevron = styled(Chevron)`
  right: -80px;
  color: rgba(128, 128, 128, 0.5);
  border: 1px solid rgba(128, 128, 128, 0.5);

  &:hover {
    cursor: default;
  }
`;

export const DeactivatedLeftChevron = styled(DeactivatedRightChevron)`
  top: 40%;
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
  /* background-color: white;
  color: rgba(10, 89, 51); */
  border-radius: 50%;
  background-color: #fff;
  color: rgb(11, 191, 125);
  cursor: pointer;
`;

export const SmRightChevron = styled(SmLeftChevron)`
  right: -0px;
`;

// Compare button
export const CompareButton = styled.button`
  border: none;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  padding: 8px;
  color: rgba(11, 191, 125, .9);
  background-color: #fff;
  box-shadow: 5px 5px 12px -5px rgba(0, 0, 0, 0.2);
`;

export const CompareButtonContainer = styled.div`
  position: absolute;
  bottom: 75px;
  transform: translateX(180px);
  color: rgba(11, 191, 125);

  &:hover ${CompareButton} {
    cursor: pointer;
    color: #fff;
    background-color: rgba(11, 191, 125, .9);
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
  &:hover {
    animation: ${rotation} 2s infinite linear;
  }
`

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
  color: rgba(11, 191, 125, .9);
  cursor: pointer;

  &:hover {
    animation: ${heartbeat} 1s infinite;
    fill: rgba(11, 191, 125, .9);
    color: rgba(11, 191, 125, .9);
    opacity: 1;
    transition: opacity 500mx;
  }
`;

// Wishlist Carousel - Default Card Button
export const DefaultCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;
  min-width: 260px;
  align-items: center;
  margin-right: 40px;
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
  border: 2px solid rgba(11, 191, 125, .9);
  color: rgba(11, 191, 125, .9);
  background-color: #fff;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: rgba(11, 191, 125, .9);
    box-shadow: 0px 5px 10px rgba(46, 229, 157, 0.4);
  }

  &:active {
    box-shadow: inset 6px 6px 5px 1px rgba(37, 167, 115, 0.7);
  }
`;
