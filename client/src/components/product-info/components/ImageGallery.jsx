import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const height = 1000;
const galleryThumbSize = 100;
const gallerySize = 7;
// let wrapperSize = (galleryThumbSize + 2) * gallerySize;
let moveCounter = 0;

export default function ImageGallery({
  photoList,
  changeGallery,
  galleryType,
}) {
  const [mainPhoto, setMainPhoto] = useState(0);
  const [zoomed, setZoom] = useState(false);
  const [imgSize, setImgSize] = useState(100);
  const [wrapperPos, setWrapperPos] = useState(0);
  const [wrapperSize, setWrapperSize] = useState(
    (galleryThumbSize + 2) * gallerySize,
  );
  const photoIndexes = [...Array(photoList.length).keys()];
  const calculatePage = photoIndexes.slice(
    moveCounter * gallerySize,
    moveCounter * gallerySize + gallerySize,
  );
  const [currThumbPage, setCurrThumbPage] = useState(calculatePage);
  const moveLimit = Math.ceil(photoList.length / gallerySize) - 1;
  // moveCounter 0
  // moveLimit 3
  // photoList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  // photoList.slice(moveCounter * gallerySize, (moveCounter * gallerySize) + gallerySize)
  // photoList.slice(0, 3) => [0, 1, 2]
  // photoList.slice(3, 6) => [3, 4, 5]
  //

  const handleClick = (index) => {
    setMainPhoto(index);
  };

  const bigImageClick = () => {
    if (galleryType === 'default') {
      changeGallery('expanded');
    }
    if (!zoomed) {
      setZoom(true);
    }
  };

  const renderImageNav = () => {
    let leftArrow = null;
    let rightArrow = null;
    if (mainPhoto === 0) {
      rightArrow = (
        <RightArrow value={1} onClick={() => setMainPhoto(mainPhoto + 1)} />
      );
    } else if (mainPhoto === photoList.length - 1) {
      leftArrow = (
        <LeftArrow value={-1} onClick={() => setMainPhoto(mainPhoto - 1)} />
      );
    } else {
      leftArrow = (
        <LeftArrow value={-1} onClick={() => setMainPhoto(mainPhoto - 1)} />
      );
      rightArrow = (
        <RightArrow value={1} onClick={() => setMainPhoto(mainPhoto + 1)} />
      );
    }
    return (
      <BigImageNav>
        {leftArrow}
        {rightArrow}
      </BigImageNav>
    );
  };

  const renderGalleryThumbs = () => {
    let checkmark = null;
    return photoList.map((photo, index) => {
      if (index === mainPhoto) {
        checkmark = <StyledIoIosCheckmarkCircle />;
      } else {
        checkmark = null;
      }
      return (
        <GalleryThumbDiv
          onClick={() => handleClick(index)}
          key={photo.url}
          pos={wrapperPos}
        >
          {checkmark}
          <GalleryThumbImg alt="" src={photo.thumbnail_url} />
        </GalleryThumbDiv>
      );
    });
  };

  const moveThumbs = (direction) => {
    if (direction > 0 && moveCounter < moveLimit) {
      // move down
      setWrapperPos(wrapperPos - wrapperSize);
      moveCounter += 1;
    } else if (direction < 0 && moveCounter > 0) {
      // move up
      setWrapperPos(wrapperPos + wrapperSize);
      moveCounter -= 1;
    }
  };

  useEffect(() => {
    setCurrThumbPage(calculatePage);
  }, [mainPhoto]);

  useEffect(() => {
    if (!currThumbPage.includes(mainPhoto)) {
      if (mainPhoto < currThumbPage[0]) {
        // page back
        moveThumbs(-1);
      } else if (mainPhoto > currThumbPage[currThumbPage.length - 1]) {
        moveThumbs(1);
      }
    }
  }, [currThumbPage]);

  const renderGalleryThumbNav = () => {
    if (!zoomed) {
      return (
        <GalleryThumbNav>
          <StyledFaChevronCircleUp
            onClick={() => {
              moveThumbs(-1);
            }}
          />
          <GalleryThumbWrapper
            height={Math.min(
              wrapperSize,
              photoList.length * (galleryThumbSize + 2),
            )}
          >
            {renderGalleryThumbs()}
          </GalleryThumbWrapper>
          <StyledFaChevronCircleDown
            onClick={() => {
              moveThumbs(1);
            }}
          />
        </GalleryThumbNav>
      );
    }
    return (
      <GalleryThumbNav style={{ display: 'flex', flexDirection: 'column' }}>
        {photoList.map((photoDot, index) => {
          if (index === mainPhoto) {
            return (
              <GoPrimitiveDot
                key={Math.random()}
                style={{
                  cursor: 'pointer',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  filter: 'drop-shadow(0 0 0.3rem black)',
                }}
                onClick={() => {
                  setMainPhoto(index);
                }}
              />
            );
          }
          return (
            <GoPrimitiveDot
              key={Math.random()}
              style={{
                cursor: 'pointer',
                color: 'rgba(255,255,255,.5)',
                width: '50px',
                height: '50px',
                filter: 'drop-shadow(0 0 0.3rem black)',
              }}
              onClick={() => {
                setMainPhoto(index);
              }}
            />
          );
        })}
      </GalleryThumbNav>
    );
  };

  return (
    <GalleryWrapper galleryType={galleryType}>
      {renderGalleryThumbNav()}
      {renderImageNav()}
      <BigImageContainer>
        <BigImage
          style={{ width: JSON.stringify(imgSize) }}
          src={photoList[mainPhoto].url}
          alt=""
          zoomed={zoomed}
          onClick={() => bigImageClick()}
        />
      </BigImageContainer>
    </GalleryWrapper>
  );
}

const StyledCircleArrow = css`
  color: rgba(255, 255, 255, 1);
  width: 50px;
  height: auto;
  margin: 10px auto;
  position: relative;
  display: block;
  filter: drop-shadow(0 0 0.3rem black);
  cursor: pointer;
`;

const StyledFaChevronCircleUp = styled(FaChevronCircleUp)`
  ${StyledCircleArrow}
`;

const StyledFaChevronCircleDown = styled(FaChevronCircleDown)`
  ${StyledCircleArrow}
`;

const StyledIoIosCheckmarkCircle = styled(IoIosCheckmarkCircle)`
  color: rgba(255, 255, 255, 1);
  width: 30px;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  filter: drop-shadow(0 0 0.3rem black);
`;

const LeftArrow = styled(FaChevronLeft)`
  width: 50px;
  height: 50px;
  color: white;
  filter: drop-shadow(0 0 0.3rem black);
  cursor: pointer;
`;

const RightArrow = styled(FaChevronRight)`
  width: 50px;
  height: 50px;
  color: white;
  filter: drop-shadow(0 0 0.3rem black);
  cursor: pointer;
`;

const GalleryWrapper = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: ${(props) => {
    if (props.galleryType === 'default') {
      return '800px';
    }
    return '100%';
  }};
  height: ${(props) => {
    if (props.galleryType === 'default') {
      return `${height}px`;
    }
    return '100vh';
  }};
`;

const GalleryThumbNav = styled.div`
  position: absolute;
  z-index: 2;
  width: 180px;
`;

const GalleryThumbWrapper = styled.div`
  margin: 5px 0;
  height: ${(props) => props.height}px;
  transform-origin: top center;
  overflow: hidden;
`;

const GalleryThumbDiv = styled.div`
  position: relative;
  display: block;
  width: ${galleryThumbSize}px;
  height: ${galleryThumbSize}px;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateY(${(props) => props.pos}px);
  border-radius: 10px;
  transition: transform 1s;
`;

const GalleryThumbImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;

const BigImageContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
`;

const BigImage = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  cursor: ${({ zoomed }) => (zoomed ? 'crosshair;' : 'zoom-in;')}
  border-radius: 10px;
`;

const BigImageNav = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 2;
`;
