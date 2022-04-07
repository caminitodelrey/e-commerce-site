import React, { useState } from 'react';
import ReviewListUnit from './ReviewListUnit.jsx';

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
        maxHeight: '550px',
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
        <button type="button" onClick={handleMoreReviews}>More Reviews</button>
      </div>
    </div>
  );
}
