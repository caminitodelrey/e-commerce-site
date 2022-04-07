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
  ActionButtonContainer,
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
              <WishlistButton
                product={product}
                wishlistProducts={wishlistProducts}
                setWishlistProducts={setWishlistProducts}
              />
            </ActionButtonContainer>
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
                  {product.price - product.sale}
                  {/* {product.price.replace(/\.00$/, '')
                  - product.sale.replace(/\.00$/, '')} */}
                </ProductPrice>
                <PreSalePrice>
                  $
                  {product.price}
                  {/* {product.price.replace(/\.00$/, '')} */}
                </PreSalePrice>
              </PriceContainer>
            ) : (
              <ProductPrice>
                $
                {product.price}
                {/* {product.price.replace(/\.00$/, '')} */}
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
