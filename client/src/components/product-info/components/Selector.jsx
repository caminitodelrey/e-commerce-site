import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FiHeart } from 'react-icons/fi';
import { TiSocialFacebook, TiSocialPinterest, TiSocialTwitter } from 'react-icons/ti';

import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  ButtonDefaultLG,
  AnimatedWishlistButton,
} from '../../../theme/buttonStyle.js';

export default function Selector({ rating, productStyles, currentStyle, styleChange }) {
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
      const newPrice = JSON.stringify(
        currentStyle.original_price - currentStyle.sale_price,
      );
      return (
        <div>
          <StyledPrice
            style={{ marginTop: '5px' }}
          >{`$${currentStyle.original_price.replace(
            /\.00$/,
            '',
          )}`}</StyledPrice>
          <p style={{ marginTop: '5px' }}>{`$${newPrice.replace(
            /\.00$/,
            '',
          )}`}</p>
        </div>
      );
    }
    return (
      <p style={{ marginTop: '5px' }}>{`$${currentStyle.original_price.replace(
        /\.00$/,
        '',
      )}`}</p>
    );
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
      <div style={{ fontSize: '1.5em', color: 'rgb(120,120,120)' }}>
        {renderPrice()}
      </div>
      <StyledError>{error.display}</StyledError>
      <p style={{ display: 'inline-block', fontWeight: '900' }}>
        {'Select a style >'}
      </p>
      <p style={{ display: 'inline-block', paddingLeft: '5px' }}>
        {' '}
        {currentStyle.name}
      </p>
      <StyleSelectDiv id="StyleSelect">
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
      <StyleDropdowns id="StyleDropdowns">
        <select onChange={changeSize}>
          <option value={-1}>Select a Size</option>
          {skuVals.map((skuVal, index) => (
            <option key={skuKeys[index]} value={index}>
              {skuVal.size}
            </option>
          ))}
        </select>

        {renderQuantity()}
      </StyleDropdowns>


      <ButtonWrapper id="ButtonWrapper">
        <StyledWishListButton>
          <AnimatedWishlistButton style={{height:'100%', width:'auto', strokeWidth:'1px'}} />
        </StyledWishListButton>
        <ButtonDefaultLG
          style={{ verticalAlign: 'middle', display:'inline-block', fontSize: '1.2em', width: 'auto', height: 'auto' }}
          onClick={() => checkError()}
        >
          {' '}
          Add to cart{' '}
        </ButtonDefaultLG>
        {/* import { TiSocialFacebook, TiSocialPinterest, TiSocialTwitter } from 'react-icons/ti'; */}

        <StyledFacebook />
        <StyledPinterest />
        <StyledTwitter />
      </ButtonWrapper>
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

const StyleDropdowns = styled.div`
  margin: 10px 0;
  > * {
    background-color: white;
    height: 30px;
    border-radius:20px;
    padding: 0 5px;
    margin: 0 5px;
  }
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
`;

const StyledWishListButton = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  text-align:center;
  border-radius: 50%;
  vertical-align:middle;
`;

const StyleSocialButtons = css`
  width: 40px;
  height: auto;
`;

const StyledFacebook = styled(TiSocialFacebook)`
  color: #3b5998;
  ${StyleSocialButtons}
  &:hover {
    filter: drop-shadow(0 0 0.3rem #3b5998);
  }
`;

const StyledPinterest = styled(TiSocialPinterest)`
  color: #c8232c;
  ${StyleSocialButtons}
  &:hover {
    filter: drop-shadow(0 0 0.3rem #c8232c);
  }
`;

const StyledTwitter = styled(TiSocialTwitter)`
  color: #00acee;
  ${StyleSocialButtons}
  &:hover {
    filter: drop-shadow(0 0 0.3rem #00acee);
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
  > * {
    vertical-align:middle;
    margin: 0 5px;

  }
`;