import React from 'react';
// import getData from '../../../helper.js';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakDown from './ratingBreakDown/RatingBreakDown.jsx';
import WriteReview from './writeReview/WriteReview.jsx';
import Sort from './sort/Sort.jsx';
import ProductBreakDown from './productBreakDown/ProductBreakDown.jsx';

export default function RatingsReviews() {
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
        <Sort />
      </div>
      <div
        className="reviewListGridBox"
        style={{
          borderStyle: 'solid',
          borderColor: 'green',
        }}
      >
        <ReviewList />
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
