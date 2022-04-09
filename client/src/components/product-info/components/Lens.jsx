import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const ratio = 2.5;
export default function Lens({ photo, photoContainer, exitZoom }) {
  const [photoState, setPhotoState] = useState(photo);
  const [photoContainerState, setPhotoContainerState] =
    useState(photoContainer);
  const lensElement = useRef(null);
  let imgObj = new Image();
  imgObj.src = photo.src;

  const numberMap = (val, inMin, inMax, outMin, outMax) =>
    ((val - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  useEffect(() => {
    const lens = document.getElementById('lensElement');

    const handleResize = () => {
      setPhotoContainerState(document.getElementById('bigImageContainer'));
    };

    photoContainerState.addEventListener('resize', handleResize);
    return () =>
      photoContainerState.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (event) => {
    const bounds = lensElement.current.getBoundingClientRect();
    let xPos = event.clientX - bounds.left;
    let yPos = event.clientY - bounds.top;

    // console.log(numberMap(5, -20, 0, -100, 100));
    // console.log(xPos , lensElement.current.clientWidth)
    const backgroundX = numberMap(
      xPos,
      0,
      lensElement.current.clientWidth,
      0,
      photoContainerState.clientWidth * ratio,
    );

    const backgroundY = numberMap(
      yPos,
      0,
      lensElement.current.clientHeight,
      0,
      photo.height * ratio,
    );

    // console.log(lensElement.current.clientWidth, photoContainerState.clientWidth)
    console.log(backgroundX - lensElement.current.clientWidth);
    lensElement.current.style.backgroundPosition = `-${
      backgroundX - (lensElement.current.clientWidth)
    }px -${backgroundY - (lensElement.current.clientHeight)}px`;
    lensElement.current.style.cursor = 'zoom-out';
  };

  return (
    <LensDiv
      id="lensElement"
      ref={lensElement}
      photoUrl={photoState.src}
      imgSize={{
        width: photoContainerState.clientWidth * ratio,
        height: photo.clientHeight * ratio,
      }}
      onMouseMove={(event) => handleMouseMove(event)}
      onClick={() => exitZoom()}
    />
  );
}

const LensDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-origin: center center;
  background-image: ${({ photoUrl }) => css`url(${photoUrl});`}
  background-size: ${ratio * 100}%;

  z-index: 3;
  background-repeat: no-repeat;
`;

/* transform: ${({ mousePos }) =>
    `translate(${mousePos.x - 75}px, ${mousePos.y - 75}px)`}; */
