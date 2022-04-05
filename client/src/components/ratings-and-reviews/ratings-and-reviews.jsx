import React, { useEffect, useState } from 'react';
import getData from '../../../helper.js';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakDown from './ratingBreakDown/RatingBreakDown.jsx';
import WriteReview from './writeReview/WriteReview.jsx';
import Sort from './sort/Sort.jsx';
import ProductBreakDown from './productBreakDown/ProductBreakDown.jsx';

export default function RatingsReviews({ product }) {
  const [reviews, setReviews] = useState([]);
  const [metaData, setMetaData] = useState([]);

  useEffect(() => {
    getData(
      `reviews?page=2&count=10&sort=relevant&product_id=${product.id}`,
    ).then(({ data }) => {
      setReviews(data.results);
    });

    getData(`reviews/meta?product_id=${product.id}`).then(({ data }) => {
      setMetaData(data);
    });
  }, []);

  const handleDropDown = (e) => {
    let dropDown = 'relevant';
    if (e.target.value === '1') {
      dropDown = 'helpful';
    } else if (e.target.value === '2') {
      dropDown = 'newest';
    } else if (e.target.value === '0') {
      dropDown = 'relevant';
    }
    getData(
      `reviews?page=2&count=10&sort=${dropDown}&product_id=${product.id}`,
    ).then(({ data }) => {
      setReviews(data.results);
    });
  };

  return (
    <div>
      <h1>RatingsReviewssssss</h1>
      <div>
        <RatingBreakDown />
      </div>
      <div>
        <ProductBreakDown />
      </div>
      <div>
        <h4>
          {`${reviews.length} reviews, sorted by`}
          <select onChange={handleDropDown}>
            <option value="0">Relevant</option>
            <option value="1">Helpful</option>
            <option value="2">Recent</option>
          </select>
          {/* <Sort metaData={metaData} /> */}
        </h4>
      </div>
      <div
        className="reviewListGridBox"
        style={{
          borderStyle: 'solid',
          borderColor: 'green',
        }}
      >
        <ReviewList reviews={reviews} />
      </div>
      <div
        className="writeReviewGridBox"
        style={{
          borderStyle: 'solid',
          borderColor: 'green',
        }}
      >
        <WriteReview />
      </div>
    </div>
  );
}
