import React from 'react';
import Ratings from './Ratings.jsx';
import ProductImg from './ProductImg.jsx';
import WishlistActionButton from './WishlistActionButton.jsx';

import {
  CardContainer,
  CardAssetContainer,
  ProductCategory,
  ProductName,
  PriceContainer,
  ProductPrice,
  PreSalePrice,
} from '../../../theme/carouselStyle.js';

import {
  CompareButtonContainer,
  CompareButton,
} from '../../../theme/buttonStyle.js';

export default function CarouselCard({
  show,
  products,
  toggleModal,
  handleKeyDown,
  getProductData,
  selectedProducts,
  setSelectedProduct,
}) {
  return (
    <>
      {products.map((product) => (
        <CardContainer
          id="card"
          key={product.name}
          style={{ width: `calc(100% / ${show})` }}
        >
          <CardAssetContainer>
            <div
              className="product-card__img"
              onClick={() => getProductData(product.id)}
              onKeyDown={handleKeyDown}
              role="button"
              tabIndex="0"
            >
              <ProductImg product={product} />
            </div>
            <WishlistActionButton
              product={product}
              selectedProducts={selectedProducts}
              setSelectedProduct={setSelectedProduct}
            />
            <CompareButtonContainer>
              <CompareButton
                type="button"
                onClick={() => toggleModal(product)}
              >
                COMPARE
              </CompareButton>
            </CompareButtonContainer>
          </CardAssetContainer>

          <div className="product-card__details">
            <ProductCategory>{product.category.toUpperCase()}</ProductCategory>
            <ProductName>{product.name}</ProductName>

            {product.sale ? (
              <PriceContainer>
                <ProductPrice style={{ color: 'red' }}>
                  $
                  {product.price.replace(/\.00$/, '')
                  - product.sale.replace(/\.00$/, '')}
                </ProductPrice>
                <PreSalePrice>
                  $
                  {product.price.replace(/\.00$/, '')}
                </PreSalePrice>
              </PriceContainer>
            ) : (
              <ProductPrice>
                $
                {product.price.replace(/\.00$/, '')}
              </ProductPrice>
            )}

            <div className="product-card__rating">
              <Ratings ratings={product.ratings} />
            </div>
          </div>
        </CardContainer>
      ))}
      ;
    </>
  );
}
