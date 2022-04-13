import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, screen, cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import '@testing-library/user-event';

import App from './App.jsx';
// import Header from './header/Header.jsx';
// import ProductInfo from './product-info/product-info.jsx';
// import QA from './QA/QA.jsx';
// import RatingsReviews from './ratings-and-reviews/ratings-and-reviews.jsx';
// import RelatedProducts from './related-products/RelatedProducts.jsx';

/*
 * Unit Test
*/

afterEach(cleanup);

// const mockProductInfo = jest.fn();
// jest.mock('./product-info/product-info.jsx', () => (props) => {
//   mockProductInfo(props);
//   return <mockProductInfo />;
// });

describe('App', () => {
  test('Header renders inside App', () => {
    const { getByTestId } = render(<App />);
    const main = getByTestId('main');
    const header = getByTestId('header');
    expect(main).toContainElement(header);
  });
});