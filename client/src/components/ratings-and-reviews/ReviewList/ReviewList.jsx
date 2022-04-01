import React, {useEffect, useState} from 'react';
import ReviewsExampleData from '../ReviewsExampleData.jsx';
import ReviewListUnit from './ReviewListUnit.jsx';


export default function () {
  const reviews = ReviewsExampleData.results;
  return (
    <div><h3>-[ReviewList]</h3>
      <div>
        {reviews.slice(0, 2).map((review, key) => {
          return (
            <div key={key}>
              <ReviewListUnit review={review}/>
            </div>
          )
        })}
      </div>
    </div>
  )
};