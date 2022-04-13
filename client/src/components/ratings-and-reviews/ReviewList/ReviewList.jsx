import React, { useState } from 'react';
import ReviewListUnit from './ReviewListUnit.jsx';
//import ReviewsExampleData from '../../ReviewsExampleData.jsx'

import {
  ButtonDefaultLG,
} from '../../../theme/buttonStyle.js';

export default function ReviewList({ reviews }) {
  reviews = reviews || []
  const [reviewsCount, setReviewsCount] = useState(2);

  const handleMoreReviews = () => {
    setReviewsCount(reviewsCount + 2);
  };

  return (
    <div>
      <div style={{
        padding: '1rem',
        maxHeight: '850px',
        overflow: 'auto',
      }}
      >
        {reviews.slice(0, reviewsCount).map((review) => (
          <div key={review.review_id}>
            <ReviewListUnit review={review} />
          </div>
        ))}
      </div>
      <div>
        <ButtonDefaultLG
          // style={{
          //   float: 'left',
          //   padding: '10px',
          //   textTransform: 'uppercase',
          //   fontSize: '15px',
          // }}
          type="button"
          onClick={handleMoreReviews}
          style= {{ float: 'left' }}
        >
          More Reviews

        </ButtonDefaultLG>
      </div>
    </div>
  );
}
