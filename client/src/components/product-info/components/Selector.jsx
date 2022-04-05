import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Selector({ productStyles, currentStyle, styleChange }) {
  const skuKeys = Object.keys(currentStyle.skus);
  const skuVals = Object.values(currentStyle.skus);
  const [currSize, setSize] = useState(-1);
  const [quantities, setQuantities] = useState([]);

  const changeSize = (event) => {
    setSize(event.target.value);
  };

  useEffect(() => {
    if (currSize > -1) {
      let updatedQuantities = [...Array(skuVals[currSize].quantity).keys()];
      updatedQuantities = updatedQuantities.map((num) => num + 1);
      updatedQuantities = updatedQuantities.filter((num) => num < 16);
      setQuantities(updatedQuantities);
    }
  }, [currSize]);

  const handleStyleClick = (index) => {
    if (currentStyle.style_id !== productStyles[index].style_id) {
      setSize(-1);
      setQuantities([]);
      styleChange(index);
    }
  };

  const renderPrice = () => {
    if (currentStyle.sale_price) {
      const newPrice = currentStyle.original_price - currentStyle.sale_price;
      return (
        <div>
          <p
            style={{
              color: 'red',
              'text-decoration': 'line-through',
            }}
          >
            {`$${currentStyle.original_price}`}
          </p>
          <p>{`$${newPrice}`}</p>
        </div>
      );
    }
    return <p>{`$${currentStyle.original_price}`}</p>;
  };

  const renderQuantity = () => {
    if (currSize > -1) {
      return (
        <select>
          {quantities.map((quantity, index) => (
            <option key={quantity} value={quantity}>
              {quantity}
            </option>
          ))}
        </select>
      );
    }
    return (
      <select disabled="disabled">
        <option>-</option>
      </select>
    );
  };

  return (
    <div>
      {renderPrice()}
      <p>{`Select a style >  ${currentStyle.name}`}</p>
      <StyleSelectDiv>
        {productStyles.map((style, index) => (
          <StyleThumb
            key={style.style_id}
            src={style.photos[0].thumbnail_url}
            onClick={() => handleStyleClick(index)}
          />
        ))}
      </StyleSelectDiv>
      <select onChange={changeSize}>
        <option value={-1}>Select a Size</option>
        {skuVals.map((skuVal, index) => (
          <option key={skuKeys[index]} value={index}>
            {skuVal.size}
          </option>
        ))}
      </select>

      {renderQuantity()}

      <button type="button"> 🌟 </button>
      <button type="button"> Add to cart </button>
      <button type="button"> 😀📓 </button>
      <button type="button"> 📸 </button>
      <button type="button"> 🐦 </button>
    </div>
  );
}

const StyleSelectDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const StyleThumb = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
