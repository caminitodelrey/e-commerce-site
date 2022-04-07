import React from 'react';
import Ratings from '../subcomponents/Ratings.jsx';
import ProductImg from '../subcomponents/ProductImg.jsx';
import WishlistButton from '../subcomponents/WishlistButton.jsx';

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

export default function RelatedCard({
  show,
  products,
  toggleModal,
  handleKeyDown,
  handleProductChange,
  wishlistProducts,
  setWishlistProducts,
}) {
  return (
    <>
      {products.map((product, index) => (
        <CardContainer
          key={index}
          style={{ width: `calc(100% / ${show})` }}
        >
          <CardAssetContainer>
            <div
              className="product-card__img"
              onClick={() => handleProductChange(product.id)}
              onKeyDown={handleKeyDown}
              role="button"
              tabIndex="0"
            >
              <ProductImg product={product} />
            </div>
            <WishlistButton
              product={product}
              wishlistProducts={wishlistProducts}
              setWishlistProducts={setWishlistProducts}
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
