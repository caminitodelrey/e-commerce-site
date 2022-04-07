import React from 'react';
import Ratings from '../subcomponents/Ratings.jsx';
import ProductImg from '../subcomponents/ProductImg.jsx';
import RemoveButton from '../subcomponents/RemoveButton.jsx';

import {
  CardContainer,
  CardAssetContainer,
  ProductCategory,
  ProductName,
  PriceContainer,
  ProductPrice,
  PreSalePrice,
} from '../../../theme/carouselStyle.js';

import { ActionButtonContainer } from '../../../theme/buttonStyle.js';

export default function WishlistCard({
  show,
  products,
  handleKeyDown,
  handleProductChange,
  wishlistProducts,
  setWishlistProducts,
}) {
  return (
    <>
      {products.map((product) => (
        <CardContainer
          key={product.id}
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
            <ActionButtonContainer>
              <RemoveButton
                clickedProduct={product}
                wishlistProducts={wishlistProducts}
                setWishlistProducts={setWishlistProducts}
              />
            </ActionButtonContainer>
          </CardAssetContainer>

          <div className="product-card__details">
            <ProductCategory>
              {product.category}
            </ProductCategory>
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
    </>
  );
}
