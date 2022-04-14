import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Selector from './components/Selector.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import axios from 'axios';
import { ProductCategory } from '../../theme/carouselStyle.js';
import Ratings from '../StarBreakDown/Ratings.jsx';

export default function ({ product, onClick, wishlistProducts, setWishlistProducts }) {
  const [styles, setStyles] = useState(
    product.styles || [
      {
        style_id: '',
        name: '',
        original_price: '',
        sale_price: null,
        'default?': false,
        photos: [{ thumbnail_url: '', url: '' }],
        skus: {},
      },
    ],
  );
  const [selectedStyle, selectStyle] = useState(styles[0]);
  const [photoList, setPhotoList] = useState(selectedStyle.photos);
  const [galleryType, setGalleryType] = useState('default');
  const productDivRef = useRef();
  const [rating, setRating] = useState({ 1: '0' });

  useEffect(() => {
    axios({
      method: 'get',
      url: '/product/styles',
      params: {
        productId: product.id,
      },
    })
      .then((res) => {
        setStyles(res.data.results);
        selectStyle(res.data.results[0]);
      })
      .then(() => (
        axios({
          method: 'get',
          url: '/product/reviews',
          params: {
            productId: product.id
          }
        })
      ))
      .then((res) => {
        setRating(res.data.ratings);
      })
      .catch((err) => console.log('catch in product info'));
  }, [product]);

  useEffect(() => {
    selectStyle(styles[0]);
  }, [styles]);

  useEffect(() => {
    selectedStyle.photos.forEach((photo) => {
      if (!photo.url) {
        photo.url = 'image_not_found.png';
      }
      if (!photo.thumbnail_url) {
        photo.thumbnail_url = 'image_not_found.png';
      }
    });
    setPhotoList(selectedStyle.photos);
  }, [selectedStyle]);

  useEffect(() => {
    if (galleryType === 'default' && productDivRef) {
      // productDivRef.current.style.height = '800px';
    } else {
      productDivRef.current.style.height = 'auto';
    }
  }, [galleryType]);

  const styleChange = (index) => {
    selectStyle(styles[index]);
  };

  const changeGallery = (galleryType) => {
    setGalleryType(galleryType);
  };

  const renderDetails = () => {
    if (galleryType === 'default') {
      return (
        <DetailsDiv id="ProductDetails">
           <Ratings rating={rating} />
          <ProductCategory style={{margin:'0', fontSize:'.9em'}}>{product.category.toUpperCase()}</ProductCategory>
          <h1 style={{marginBottom:'5px'}}>{product.name}</h1>
          <Selector
            product={product}
            productStyles={styles}
            currentStyle={selectedStyle}
            styleChange={styleChange}
            rating={rating}
            wishlistProducts={wishlistProducts}
            setWishlistProducts={setWishlistProducts}
          />
          <h2>{product.slogan}</h2>
          <p style={{borderBottom: '2px solid rgba(169,169,169, .5)', paddingBottom: '10px', marginBottom:'0'}}>{product.description}</p>
          {product.features.map((obj) => (
            <div key={Math.random()}>
              <p style={{display:'inline-block', fontWeight:'900'}}>{obj.feature}</p>
              { obj.value && (
                <p style={{display:'inline-block'}}>: {obj.value}</p>
              )}
            </div>
          ))}
        </DetailsDiv>
      );
    }
    return null;
  };

  return (
    <ProductDiv id="Product Div" ref={productDivRef} onClick={onClick}>
      <ImageGallery
        photoList={photoList}
        changeGallery={changeGallery}
        galleryType={galleryType}
      />
      {renderDetails()}
    </ProductDiv>
  );
}

const ProductDiv = styled.div`
  width: 100%;
  position: relative;
  margin: 20px auto;
  justify-content: center;
  display: flex;
  flex-direction: row;
  min-height:100vh;
`;

const DetailsDiv = styled.div`
  display: inline-block;
  padding-left: 30px;
  width: 40%;
  vertical-align: middle;
  height:100%;
  overflow: 'auto';
`;
