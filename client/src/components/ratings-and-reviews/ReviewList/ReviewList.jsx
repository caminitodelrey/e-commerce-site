import React, { useState } from 'react';
import ReviewListUnit from './ReviewListUnit.jsx';

import {
  ReviewButtons,
} from '../../../theme/buttonStyle.js';

export default function ReviewList({ reviews }) {
  // const reviews = ReviewsExampleData.results;
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
        <ReviewButtons
          // style={{
          //   float: 'left',
          //   padding: '10px',
          //   textTransform: 'uppercase',
          //   fontSize: '15px',
          // }}
          type="button"
          onClick={handleMoreReviews}
        >
          More Reviews

        </ReviewButtons>
      </div>
    </div>
  );
}
