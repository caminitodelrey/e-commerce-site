import React from 'react';
import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';
import { render, screen, cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import '@testing-library/user-event';

import App from './App.jsx';
import Header from './header/Header.jsx';
import ProductInfo from './product-info/product-info.jsx';
import QA from './QA/QA.jsx';
import RatingsReviews from './ratings-and-reviews/ratings-and-reviews.jsx';
import RelatedProducts from './related-products/RelatedProducts.jsx';



afterEach(cleanup);

// Unit Test for App
// describe("App", () => {
//   beforeEach(() => {
//     let app = render(<App />)
//   });
//   it("App renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<App />, div)
//     expect(app).toBe()
//     ReactDOM.unmountComponentAtNode(div);
//   })
// })

describe('App component', () => {
  test('it renders', () => {
    render(<App />);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
 })

// describe("Header:", () => {
//   it("Header renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<Header />, div)
//     ReactDOM.unmountComponentAtNode(div);
//   })

//   it("renders search bar", () => {
//     const { queryByPlaceholderText } = render(<input placeholder="Search" />)
//     expect(queryByPlaceholderText("search").toBeInTheDocument())
//   })

  // it("renders nav bar", () => {
  //   const NewReleases = screen.getByText('New Releases')
  //   expect(NewReleases.toBeInTheDocument())
  // })
// })


// describe("Product Info:", () => {
//   it("product-info renders without crashing", () => {
//       const div = document.createElement("div");
//       ReactDOM.render(<ProductInfo />, div)
//       ReactDOM.unmountComponentAtNode(div);
//     })
//   })

//     describe("Related Products:", () => {
//       it("RelatedProducts renders without crashing", () => {
//           const div = document.createElement("div");
//           ReactDOM.render(<App />, div)
//           ReactDOM.render(<RelatedProducts />)
//           ReactDOM.unmountComponentAtNode(div);
//         })
//       })

      // describe('Input value', () => {
      //   it('updates on change', () => {
      //     const setSearch = jest.fn((value) => {})

      //     const { queryByPlaceholderText } = render(<SearchBox setSearch={setSearch}/>)

      //     const searchInput = queryByPlaceholderText('Search...')

      //     fireEvent.change(searchInput, { target: { value: 'test' } })

      //     expect(searchInput.value).toBe('test')
      //   })
      // })

// const QA = jest.fn();
// jest.mock('./QA/QA.jsx', () => (props) => {
//   QA(props);
//   return <QA />;
// })

// it("If App is ")

// describe("Questions & Answers:", () => {
//   it("QA renders without crashing", () => {

//     const div = document.createElement("div");
//     ReactDOM.render(<QA />, div)
//     // ReactDOM.unmountComponentAtNode(div);
//   })
// })

// describe("Ratings & Reviews:", () => {
//   it("rantings-and-reviews renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<RatingsReviews />, div)
//     ReactDOM.unmountComponentAtNode(div);
//   })
// })







// it('renders correctly', () => {
//   const tree = renderer
//     .create(<Link page="http://www.facebook.com">Facebook</Link>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
