import React, { forwardRef, useState, useEffect } from 'react';
import { getData } from '../../../helper.js';
import { Carousels, WishlistAccordion } from '../../theme/carouselStyle.js';
import RelatedCarousel from './carousels/RelatedCarousel.jsx';
import WishlistCarousel from './carousels/WishlistCarousel.jsx';

const RelatedProducts = forwardRef(({ product, handleProductChange, onClick }, ref) => {
  const [status, setStatus] = useState('pending');
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const [displayWishlist, setDisplayWishlist] = useState(false);

  const getRelatedProducts = () => {
    getData(`products/${product.id}/related`)
      .then(({ data }) => {
        data.map((id) => {
          Promise.all([
            getData(`products/${id}`),
            getData(`products/${id}/styles`),
            getData(`reviews/meta?product_id=${id}`),
          ]).then((productArr) => {
            setRelatedProducts((prevState) => [...prevState, {
              id: productArr[0].data.id,
              image: productArr[1].data.results[0].photos[0].url,
              category: productArr[0].data.category,
              name: productArr[0].data.name,
              price: productArr[1].data.results[0].original_price,
              sale: productArr[1].data.results[0].sale_price,
              rating: productArr[2].data.ratings,
            }]);
            setStatus('resolved');
          });
        });
      })
      .catch((err) => {
        setStatus('rejected');
        throw Error(err);
      });
  };

  useEffect(() => {
    setRelatedProducts([]);
    getRelatedProducts();
  }, [product]);

  useEffect(() => {
    setWishlistProducts(JSON.parse(window.localStorage.getItem('wishlist')) || []);
  }, []);

  switch(status) {
    case 'pending':
      return <div>Loading...</div>
    case 'rejected':
      return (
        <div>
          <div>
            We are sorry. There was a problem loading recommended products and your wishlist.
          </div>
        </div>
      )
    case 'resolved':
      return (
        <Carousels className="carousel">

          <RelatedCarousel
            products={relatedProducts}
            mainProduct={product}
            handleProductChange={handleProductChange}
            wishlistProducts={wishlistProducts}
            setWishlistProducts={setWishlistProducts}
          />

          {/* <WishlistAccordion
            ref={ref}
            onClick={() => setDisplayWishlist(!displayWishlist)}
          >
            <h2>WISHLIST {!displayWishlist ? '—' :'+'}</h2>
          </WishlistAccordion>
          { !displayWishlist && (
            <WishlistCarousel
            currentProduct={product}
            products={wishlistProducts}
            handleProductChange={handleProductChange}
            wishlistProducts={wishlistProducts}
            setWishlistProducts={setWishlistProducts}
          />)} */}

          <WishlistCarousel
            currentProduct={product}
            products={wishlistProducts}
            handleProductChange={handleProductChange}
            wishlistProducts={wishlistProducts}
            setWishlistProducts={setWishlistProducts}
          />
        </Carousels>
      )
  }
});

export default RelatedProducts;

