import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import getData from '../../../../helper.js';

import {
  CardAssetImg,
  ThumbnailCardsWrapper,
  ThumbnailContentWrapper,
  ThumbnailContent,
  ThumbnailCardContainer,
  ThumbnailAssetContainer,
  ThumbnailImg,
  NoThumbnailCarousel,
} from '../../../theme/carouselStyle.js';

import {
  SmLeftChevron,
  SmRightChevron,
} from '../../../theme/buttonStyle.js';

export default function ProductImg({ product, handleProductChange }) {
  const [thumbnails, setThumbnails] = useState([]);
  // const [lenght, setLength] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [thumbnailIsClicked, setThumbnailIsClicked] = useState(false);
  const [currentPreviewURL, setCurrentPreviewURL] = useState('')

  const maxDisplayCount = 4;

  const getImages = () => {
    getData(`products/${product.id}/styles`)
      .then(({ data }) => {
        data.results.forEach(({ photos }) => {
          setThumbnails(photos);
          // setLength(photos.length);
          const length = photos.length;
          console.log(length)
        });
      })
      .catch((err) => {
        throw Error(err);
      });
  };

  const renderCarousel = () => {
    setIsHovering(!isHovering);
    if (thumbnailIsClicked === true) {
      setIsHovering(true);
    }
  };

  const handleMainPreviewChange = (imgURL) => {
    setThumbnailIsClicked(true);
    setCurrentPreviewURL(imgURL);
    console.log('thumbnail clicked!')
  };

  useEffect(() => {
    getImages();
  }, [product]);

  // length is not populated. Why?
  // currentIndex = starts at 0, changes with next() and prev() functions
  // length = set with useEffect. It's the length of an array of objects (thumbnails)

  const next = () => {
    if (currentIndex < length - maxDisplayCount) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div
      onMouseEnter={renderCarousel}
      onMouseLeave={renderCarousel}
      style={{ 'maxHeight': '360px' }}
    >

      {!thumbnailIsClicked ? (
        <CardAssetImg
          src={
            product.image ||
            'https://images.unsplash.com/photo-1555617117-08d2a80f6aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          }
          onClick={() => handleProductChange(product.id)}
        />
      ) : (
        <CardAssetImg
          src={currentPreviewURL}
          onClick={() => {
            handleProductChange(product.id);
            renderCarousel;
          }}
        />
      )}

      {isHovering && (
        <ThumbnailCardsWrapper className='CardsWrapper'>

          {/* <SmLeftChevron className="left-arrow" onClick={prev}>
            <FaChevronLeft />
          </SmLeftChevron> */}

          {currentIndex > 0 && (
            <SmLeftChevron className="left-arrow" onClick={prev}>
              <FaChevronLeft />
            </SmLeftChevron>
          )}

          <ThumbnailContentWrapper className='ContentWrapper'>
            <ThumbnailContent
              style={{
                transform: `translateX(-${currentIndex * (100 / maxDisplayCount)}%)`,
              }}
              className='Content'
            >

                {thumbnails.map((thumbnail) => (
                  thumbnail.thumbnail_url ? (
                    <ThumbnailCardContainer
                      className='CardContainer'
                      key={thumbnail.thumbnail_url}
                      style={{ width: `calc(100% / ${maxDisplayCount})` }}
                    >
                      <ThumbnailAssetContainer className='AssetContainer'>
                        <ThumbnailImg
                          src={thumbnail.thumbnail_url}
                          onClick={() => handleMainPreviewChange(thumbnail.url)}
                        />
                      </ThumbnailAssetContainer>
                    </ThumbnailCardContainer>
                  ) : (
                    <NoThumbnailCarousel key={thumbnail.toString()} />
                  )
                ))}

            </ThumbnailContent>
          </ThumbnailContentWrapper>

          {currentIndex < length - maxDisplayCount && (
            <SmRightChevron className="right-arrow" onClick={next}>
              <FaChevronRight />
            </SmRightChevron>
          )}

          {/* <SmRightChevron className="right-arrow" onClick={next}>
            <FaChevronRight />
          </SmRightChevron> */}

        </ThumbnailCardsWrapper>
      )}
    </div>
  );
}
