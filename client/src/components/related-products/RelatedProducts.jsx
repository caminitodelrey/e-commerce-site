import React, { forwardRef, useState, useEffect } from 'react';
import { Carousels, WishlistAccordion } from '../../theme/carouselStyle.js';
import RelatedCarousel from './carousels/RelatedCarousel.jsx';
import WishlistCarousel from './carousels/WishlistCarousel.jsx';
import axios from 'axios';

const RelatedProducts = forwardRef(
  ({ product, handleProductChange, onClick }, ref) => {
    const [status, setStatus] = useState('pending');
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);

    const handleServerRoutes = (url, id) => (
      axios({
        method: 'get',
        url: url,
        params: {
          productId: id,
        }
      })
    );

    const getRelatedProducts = () => {
      axios({
        method: 'get',
        url: '/product/related',
        params: {
          productId: product.id,
        }
      })
      .then(({ data }) => {
        data.map((id) => {
          Promise.all([
            handleServerRoutes('/product', id),
            handleServerRoutes('/product/styles', id),
            handleServerRoutes('/product/reviews', id),
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
        })
        .catch((err) => {
          setStatus('rejected');
          console.log('err on the client side: Related Products');
        });
      });
    };

    useEffect(() => {
      setRelatedProducts([]);
      getRelatedProducts();
    }, [product]);

    useEffect(() => {
      setWishlistProducts(
        JSON.parse(window.localStorage.getItem('wishlist')) || [],
      );
    }, []);

    switch (status) {
      case 'pending':
        return <div>Loading...</div>;
      case 'rejected':
        return (
          <div>
            <div>
              We are sorry. There was a problem loading recommended products and
              your wishlist.
            </div>
          </div>
        );
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
            <WishlistCarousel
              ref={ref}
              currentProduct={product}
              products={wishlistProducts}
              handleProductChange={handleProductChange}
              wishlistProducts={wishlistProducts}
              setWishlistProducts={setWishlistProducts}
            />
          </Carousels>
        );
    }
  },
);

export default RelatedProducts;
