import React, {useEffect, useState} from 'react';
import ReviewsExampleData from '../ReviewsExampleData.jsx';
import ReviewListUnit from './ReviewListUnit.jsx';


export default function () {
  const reviews = ReviewsExampleData.results;
  const [reviewsCount, setReviewsCount] = useState(2)

  const handleMoreReviews = () => {
    setReviewsCount(reviewsCount+2);
  }

  return (
    <div><h3>-[ReviewList]</h3>
      <div>
        {reviews.slice(0, reviewsCount).map((review, key) => {
          return (
            <div key={key}>
              <ReviewListUnit review={review}/>
            </div>
          )
        })}
      </div>
      <div>
        <button onClick={handleMoreReviews}>More Reviews</button>
      </div>
    </div>
  )
};