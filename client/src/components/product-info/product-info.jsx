import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getData from '../../../helper';
import Selector from './components/Selector.jsx';
import ImageGallery from './components/ImageGallery.jsx';

export default function ({ product }) {
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

  const styleChange = (index) => {
    selectStyle(styles[index]);
  };

  const changeGallery = (galleryType) => {
    setGalleryType(galleryType);
  }

  const renderDetails = () => {
    if (galleryType === 'default') {
      return (
        <div>
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
        </div>
      );
    }
    return null;
  };

  return (
    <ProductDiv>
      <ImageGallery photoList={photoList} changeGallery={changeGallery} galleryType={galleryType} />
      {renderDetails()}
    </ProductDiv>
  );
}

const ProductDiv = styled.div`
  padding: 10px;
  width: 50%;
  position: relative;
  margin: 20px auto;
  border: 3px solid black;
`;
