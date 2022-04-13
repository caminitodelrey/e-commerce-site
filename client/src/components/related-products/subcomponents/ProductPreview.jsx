import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
// import { getData } from '../../../../helper.js';

import {
  CardAssetImg,
  ThumbnailCardsWrapper,
  ContentWrapper,
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

export default function ProductPreview({ product, handleProductChange }) {
  const [thumbnails, setThumbnails] = useState([]);
  const [length, setLength] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [thumbnailIsClicked, setThumbnailIsClicked] = useState(false);
  const [currentPreviewURL, setCurrentPreviewURL] = useState('')

  const maxDisplayCount = 4;

  const handleServerRoutes = (url, id) => (
    axios({
      method: 'get',
      url: url,
      params: {
        productId: id,
      }
    })
  );

  const getImages = () => {
    handleServerRoutes('/product/styles', product.id)
      .then(({ data }) => {
        data.results.forEach(({ photos }) => {
          setThumbnails(photos);
          setLength(photos.length);
        });
      })
      .catch((err) => {
        console.log('err in ProductPreview');
      });
  };

  // const getImages = () => {
  //   getData(`products/${product.id}/styles`)
  //     .then(({ data }) => {
  //       data.results.forEach(({ photos }) => {
  //         setThumbnails(photos);
  //         setLength(photos.length);
  //       });
  //     })
  //     .catch((err) => {
  //       throw Error(err);
  //     });
  // };

  const renderCarousel = () => {
    setIsHovering(!isHovering);
  };

  const handleMainPreviewChange = (imgURL) => {
    setThumbnailIsClicked(true);
    setCurrentPreviewURL(imgURL);
  };

  useEffect(() => {
    getImages();
  }, [product]);

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
          }}
        />
      )}

      {isHovering && (
        <ThumbnailCardsWrapper className='CardsWrapper'>

          {currentIndex > 0 && (
            <SmLeftChevron className="left-arrow" onClick={prev}>
              <FaChevronLeft />
            </SmLeftChevron>
          )}

          <ContentWrapper className='ContentWrapper'>
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
          </ContentWrapper>

          {currentIndex < length - maxDisplayCount && (
            <SmRightChevron className="right-arrow" onClick={next}>
              <FaChevronRight />
            </SmRightChevron>
          )}

        </ThumbnailCardsWrapper>
      )}
    </div>
  );
}
