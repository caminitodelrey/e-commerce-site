import React, { useState, useEffect } from 'react';
import getData from '../../../helper.js';
import { Carousels } from '../../theme/carouselStyle.js';
import RelatedCarousel from './carousels/RelatedCarousel.jsx';
import WishlistCarousel from './carousels/WishlistCarousel.jsx';

// products/37311/related
// product_id: 37311 - 38199

export default function RelatedProducts({ product, setMainProduct }) {
  const [status, setStatus] = useState('pending');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedProducts, setSelectedProduct] = useState([]);

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
    getRelatedProducts();
  }, []);

  useEffect(() => {
    setSelectedProduct(JSON.parse(window.localStorage.getItem('wishlist')) || []);
  }, []);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'resolved') {
    return (
      <Carousels className="carousel">
        <div className="related-header">
          <h2>COMPLETE THE LOOK</h2>
        </div>
        <RelatedCarousel
          show={4}
          products={relatedProducts}
          mainProduct={product}
          setMainProduct={setMainProduct}
          selectedProducts={selectedProducts}
          setSelectedProduct={setSelectedProduct}
        />

        <div className="selected-header">
          <h2>WISHLIST</h2>
        </div>
        <WishlistCarousel
          products={selectedProducts}
          show={4}
        />
      </Carousels>
    );
  }

  if (status === 'rejected') {
    return (
      <div>
        <div>
          We are sorry. There was a problem loading recommended products and your wishlist.
        </div>
      </div>
    );
  }
}
