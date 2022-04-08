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
  LeftChevron,
  RightChevron,
} from '../../../theme/buttonStyle.js';

export default function ProductImg({ product, handleProductChange }) {
  const [images, setImages] = useState([]);
  const [lenght, setLength] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [thumbnailIsClicked, setThumbnailIsClicked] = useState(false);
  const [currentPreviewURL, setCurrentPreviewURL] = useState('')

  const maxDisplayCount = 4;

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

  const getImages = () => {
    getData(`products/${product.id}/styles`)
      .then(({ data }) => {
        data.results.forEach((result) => {
          setImages(result.photos)
          setLength(result.length);
        });
      })
      .catch((err) => {
        throw Error(err);
      });
  };

  const renderCarousel = () => {
    setIsHovering(!isHovering);
  };

  const handleMainPreviewChange = (imgURL) => {
    setThumbnailIsClicked(true);
    setCurrentPreviewURL(imgURL);
    console.log('thumbnail clicked!')
  };

  useEffect(() => {
    setImages([]);
    getImages();
  }, [product]);

  return (
    <div
      onMouseEnter={renderCarousel}
      // onMouseLeave={renderCarousel}
      style={{ 'maxHeight': '360px' }}
    >

      {!thumbnailIsClicked ? (
        <CardAssetImg
          onClick={() => handleProductChange(product.id)}
          src={
            product.image ||
            'https://images.unsplash.com/photo-1555617117-08d2a80f6aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          }
        />
      ) : (
        <CardAssetImg
          src={currentPreviewURL}
        />
      )}

      {isHovering && (
        <ThumbnailCardsWrapper className='CardsWrapper'>

          {currentIndex > 0 && (
          <LeftChevron className="left-arrow" onClick={prev}>
            <FaChevronLeft />
          </LeftChevron>
          )}

          <ThumbnailContentWrapper className='ContentWrapper'>
            <ThumbnailContent
              style={{
                transform: `translateX(-${currentIndex * (100 / maxDisplayCount)}%)`,
              }}
              className='Content'
            >

                {images.map((image) => (
                  image.thumbnail_url ? (
                    <ThumbnailCardContainer
                      className='CardContainer'
                      key={image.thumbnail_url}
                      style={{ width: `calc(100% / ${maxDisplayCount})` }}
                    >
                      <ThumbnailAssetContainer className='AssetContainer'>
                        <ThumbnailImg
                          src={image.thumbnail_url}
                          onClick={() => handleMainPreviewChange(image.url)}
                        />
                      </ThumbnailAssetContainer>
                    </ThumbnailCardContainer>
                  ) : (
                    <NoThumbnailCarousel key={image.toString()} />
                  )
                ))}

            </ThumbnailContent>
          </ThumbnailContentWrapper>

          {currentIndex < length - maxDisplayCount && (
          <RightChevron className="right-arrow" onClick={next}>
            <FaChevronRight />
          </RightChevron>
          )}

        </ThumbnailCardsWrapper>
      )}
    </div>
  );
}
