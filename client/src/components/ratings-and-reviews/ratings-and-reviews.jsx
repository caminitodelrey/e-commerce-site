import React from 'react';
import getData from '../../../helper.js';
import ReviewList from './reviewList/ReviewList.jsx';
import RatingBreakDown from './ratingBreakDown/RatingBreakDown.jsx';
import WriteReview from './writeReview/WriteReview.jsx';
import Sort from './sort/Sort.jsx';
import ProductBreakDown from './productBreakDown/ProductBreakDown.jsx'

export default function RatingsReviews ({product}) {
  console.log(product);
  return (
    <div>[RatingsReviews testing test git flow]
      <div>
        <RatingBreakDown />
      </div>
      <div>
        <ProductBreakDown />
      </div>
      <div>
        <WriteReview />
      </div>
      <div>
        <Sort />
        <ReviewList />
      </div>
    </div>

  )
}