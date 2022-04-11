import React from 'react';
import ReactDOM from 'react-dom/client';
// import renderer from 'react-test-renderer';
import { render, screen, cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/user-event';

import RelatedProducts from './RelatedProducts.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<div></div>)
})

// describe('Related Products Products Test', () => {
//   test('should show the carousel title', () => {
//     render(<RelatedProducts />)
//     const relatedCarouselTitle = screen.getByText('COMPLETE THE LOOK')
//     const wishlistCarouselTitle = screen.getByText('WISHLIST')
//     expect(relatedCarouselTitle).toBeInTheDocument()
//     expect(wishlistCarouselTitle).toBeInTheDocument()
//   });
// });