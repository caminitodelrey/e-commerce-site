import React, { useState, useEffect } from 'react';
// import React from 'react';
import getData from '../../../helper.js';
import { Carousels } from '../../theme/carouselStyle.js';
import RelatedCarousel from './carousels/RelatedCarousel.jsx';
import WishlistCarousel from './carousels/WishlistCarousel.jsx';

// products/37311/related
// product_id: 37311 - 38199

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'pending',
      relatedProducts: [],
      selectedProducts: [
        {
          image:
            'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          category: 'pants',
          name: 'Morning Joggers',
          price: '40.00',
          sale: null,
          rating: {
            1: '1',
            2: '2',
            3: '1',
            4: '5',
            5: '3',
          },
        },
      ],
    };
  }

  componentDidMount() {
    this.getRelatedProducts();
  }

  getRelatedProducts() {
    getData(`products/${this.props.product.id}/related`)
      // by passing data in {} an array of IDs is returned
      .then(({ data }) => {
        data.map((id) => {
          // Why is the order between Accessories and Pants changing randomly?
          Promise.all([
            getData(`products/${id}`),
            getData(`products/${id}/styles`),
            getData(`reviews/meta?product_id=${id}`),
          ]).then((productArr) => {
            const relatedProducts = [...this.state.relatedProducts];

            const product = {
              id: productArr[0].data.id,
              image: productArr[1].data.results[0].photos[0].url,
              category: productArr[0].data.category,
              name: productArr[0].data.name,
              price: productArr[1].data.results[0].original_price,
              sale: productArr[1].data.results[0].sale_price,
              rating: productArr[2].data.ratings,
            };

            relatedProducts.push(product);

            this.setState({
              status: 'resolved',
              relatedProducts,
            });
          });
        });
      })
      .catch((err) => {
        this.setState({
          status: 'rejected',
        });
        throw Error(err);
      });
  }

  render() {
    const { status, relatedProducts, selectedProducts } = this.state;

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
            mainProduct={this.props.product}
            show={4}
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
}

// export default function RelatedProducts({ product }) {
//   const [status, setStatus] = useState('pending');
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [selectedProduct] = useState([
//     {
//       image:
//         'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//       category: 'pants',
//       name: 'Morning Joggers',
//       price: '40.00',
//       sale: null,
//       rating: {
//         1: '1',
//         2: '2',
//         3: '1',
//         4: '5',
//         5: '3',
//       },
//     },
//   ]);

//   const getRelatedProducts = () => {
//     getData(`products/${product.id}/related`)
//       // by passing data in {} an array of IDs is returned
//       .then(({ data }) => {
//         data.map((id) => {
//           // Why is the order between Accessories and Pants changing randomly?
//           Promise.all([
//             getData(`products/${id}`),
//             getData(`products/${id}/styles`),
//             getData(`reviews/meta?product_id=${id}`),
//           ]).then((productArr) => {
//             // const productObj = {
//             //   id: productArr[0].data.id,
//             //   image: productArr[1].data.results[0].photos[0].url,
//             // category: productArr[0].data.category,
//             // name: productArr[0].data.name,
//             // price: productArr[1].data.results[0].original_price,
//             // sale: productArr[1].data.results[0].sale_price,
//             // rating: productArr[2].data.ratings,
//             // };

//             setRelatedProducts((prevState) => {
//               [
//                 ...prevState,
//                 {
//                   id: productArr[0].data.id,
//                   image: productArr[1].data.results[0].photos[0].url,
//                   category: productArr[0].data.category,
//                   name: productArr[0].data.name,
//                   price: productArr[1].data.results[0].original_price,
//                   sale: productArr[1].data.results[0].sale_price,
//                   rating: productArr[2].data.ratings,
//                 },
//               ];
//             });
//             setStatus('resolved');
//           });
//         });
//       })
//       .catch((err) => {
//         setStatus('rejected');
//         throw Error(err);
//       });
//   };

//   useEffect(() => {
//     getRelatedProducts();
//   }, []);

//   if (status === 'pending') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'resolved') {
//     return (
//       <Carousels className="carousel">
//         <div className="related-header">
//           <h2>COMPLETE THE LOOK</h2>
//         </div>
//         <RelatedCarousel
//           products={relatedProducts}
//           mainProduct={product}
//           show={4}
//         />

//         <div className="selected-header">
//           <h2>WISHLIST</h2>
//         </div>
//         <WishlistCarousel products={selectedProduct} />
//       </Carousels>
//     );
//   }

//   if (status === 'rejected') {
//     return (
//       <div>
//         <div>
//           We are sorry. There was a problem loading products to complete the
//           look.
//         </div>
//       </div>
//     );
//   }
// }
