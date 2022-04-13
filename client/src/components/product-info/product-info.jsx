import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { getData } from '../../../helper';
import Selector from './components/Selector.jsx';
import ImageGallery from './components/ImageGallery.jsx';


export default function ({ product, onClick }) {
  // const [product, setProductId] = useState(product);
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

  useEffect(() => {
    getData(`products/${product.id}/styles`)
      .then((res) => {
        setStyles(res.data.results);
        selectStyle(res.data.results[0]);
      })
      .catch((err) => console.log('getData catch: ', err));
  }, [product]);

  useEffect(() => {
    selectStyle(styles[0]);
  }, [styles]);

  useEffect(() => {
    setPhotoList(selectedStyle.photos);
  }, [selectedStyle]);

  useEffect(() => {
    if (galleryType === 'default' && productDivRef) {
      productDivRef.current.style.height = '800px';
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
        <DetailsDiv>
          <p>Review</p>
          <p>{product.category}</p>
          <h1>{product.name}</h1>
          <Selector
            productStyles={styles}
            currentStyle={selectedStyle}
            styleChange={styleChange}
          />
          <h2>{product.slogan}</h2>
          <p>{product.description}</p>
          {product.features.map((obj) => (
            <p key={JSON.stringify(obj)}>{`${obj.feature}: ${obj.value}`}</p>
          ))}
        </DetailsDiv>
      );
    }
    return null;
  };

  return (
    <ProductDiv ref={productDivRef} onClick={onClick}>
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
  padding: 10px;
  max-width: 100%;
  min-width:500px;
  height:800px;
  position: relative;
  margin: 20px auto;
  /* border: 3px solid black; */
  display:flex;
  flex-direction:row;
`;

const DetailsDiv = styled.div`
  padding: 0 50px;
  display:inline-block;
`;
