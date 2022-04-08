import { IoIosCheckmarkCircle } from 'react-icons/io';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Selector({ productStyles, currentStyle, styleChange }) {
  const skuKeys = Object.keys(currentStyle.skus);
  const skuVals = Object.values(currentStyle.skus);
  const [currSize, setSize] = useState(-1);
  const [quantities, setQuantities] = useState([]);
  const [error, setError] = useState({
    show: false,
    value: 'Select a size before adding to cart',
    display: null,
  });

  const checkError = () => {
    if (currSize === -1) {
      setError({
        show: error.show,
        value: error.value,
        display: error.value,
      });
    } else {
      setError({
        show: error.show,
        value: error.value,
        display: null,
      });
    }
  };

  const turnOffError = () => {
    const errorCopy = error;
    errorCopy.display = null;
    setError(errorCopy);
  };

  const changeSize = (event) => {
    setSize(event.target.value);
    turnOffError();
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
    turnOffError();
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
          <StyledPrice>{`$${currentStyle.original_price}`}</StyledPrice>
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
          {quantities.map((quantity) => (
            <option key={Math.random()} value={quantity}>
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
      <StyledError>{error.display}</StyledError>
      <p>{`Select a style >  ${currentStyle.name}`}</p>
      <StyleSelectDiv>
        {productStyles.map((style, index) => {
          if (style.style_id === currentStyle.style_id) {
            return (
              <div key={style.style_id} style={{ position: 'relative' }}>
                <StyleThumb
                  selected
                  src={style.photos[0].thumbnail_url}
                  onClick={() => handleStyleClick(index)}
                />
                <StyledCheckmark />
              </div>
            );
          }
          return (
            <StyleThumb
              key={style.style_id}
              src={style.photos[0].thumbnail_url}
              onClick={() => handleStyleClick(index)}
            />
          );
        })}
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
      <button type="button" onClick={() => checkError()}> Add to cart </button>
      <button type="button"> 😀📓 </button>
      <button type="button"> 📸 </button>
      <button type="button"> 🐦 </button>
    </div>
  );
}

const styleThumbSize = 100;
const styleThumbMargin = 5;

const StyleSelectDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${(styleThumbSize + styleThumbMargin * 2) * 4}px;
`;

const StyleThumb = styled.img`
  display: block;
  width: ${styleThumbSize}px;
  height: ${styleThumbSize}px;
  margin: ${styleThumbMargin}px;
  object-fit: cover;
  border-radius: 50%;
  cursor: ${({ selected }) => (selected ? 'auto;' : 'pointer;')};
`;

const StyledPrice = styled.p`
  color: red;
  text-decoration: line-through;
`;

const StyledCheckmark = styled(IoIosCheckmarkCircle)`
  position: absolute;
  top: 5px;
  right: 5px;
  color: white;
  width: 30px;
  height: 30px;
  filter: drop-shadow(0 0 0.3rem black);
`;

const StyledError = styled.p`
  color: red;
  text-decoration: bold;
`
