import React, { useState, useEffect } from 'react';
import getData from '../../../helper.js';
import { Carousels } from '../../theme/carouselStyle.js';
import RelatedCarousel from './carousels/RelatedCarousel.jsx';
import WishlistCarousel from './carousels/WishlistCarousel.jsx';

// products/37311/related
// product_id: 37311 - 38199

export default function RelatedProducts({ product }) {
  const [status, setStatus] = useState('pending');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedProducts, setSelectedProduct] = useState([
    // {
    //   image:
    //     'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    //   category: 'pants',
    //   name: 'Morning Joggers',
    //   price: '40.00',
    //   sale: null,
    //   rating: {
    //     1: '1',
    //     2: '2',
    //     3: '1',
    //     4: '5',
    //     5: '3',
    //   },
    // },
  ]);

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
    // const savedProducts = JSON.parse(window.localStorage.getItem('wishlist'));
    // savedProducts ? setSelectedProduct(savedProducts) : null;
    setSelectedProduct(JSON.parse(localStorage.getItem('wishlist') || []));
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
          products={relatedProducts}
          mainProduct={product}
          show={4}
          setSelectedProduct={setSelectedProduct}
        />

        <div className="selected-header">
          <h2>WISHLIST</h2>
        </div>
        <WishlistCarousel products={selectedProducts} />
      </Carousels>
    );
  }

  if (status === 'rejected') {
    return (
      <div>
        <div>
          We are sorry. There was a problem loading products to complete the
          look.
        </div>
      </div>
    );
  }
}
