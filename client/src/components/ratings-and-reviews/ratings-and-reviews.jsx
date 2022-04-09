import React, { useEffect, useState } from 'react';
import { getData } from '../../../helper.js';
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
      `reviews?page=2&count=10&sort=newest&product_id=${product.id}`,
    ).then(({ data }) => {
      setReviews(data.results);
    });

    getData(
      `reviews/meta?product_id=${product.id}`,
    ).then(({ data }) => {
      setMetaData(data);
    });
  }, []);

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
        <Sort metaData={metaData} />
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
