import React, {useEffect, useState} from 'react';

export default function ReivewListUnit ({review}) {
  const review2 = review || {summary: '', rating: '', body:'',
    date:'', reviewer_name: '', response: '', helpfulness: 0, recommend: true};

  return (
    <div className="ratings-flexbox-container" style={{
      borderStyle: 'solid',
      borderColor: 'Green',
      }}>
      <div>title:{review2.summary}
        <div className="ratings-starRatings">
          <span className="rating-star">*</span>
          <span className="rating-star">*</span>
          <span className="rating-star">*</span>
          <span className="rating-star">*</span>
          <span className="rating-star">*</span>
          rating:{review2.rating}
        </div>
        <br />
        <span>{review2.reviewer_name}</span>
        <br />
        <span>{review2.date}</span>
      </div>
      <p>review:{review2.body}</p>

      <div>
        {review2.response ? `Response: ${review2.response}` : null}
      </div>

      <div>
        {`Helpfulness: Yes ${review2.helpfulness} | Report`}
      </div>

      <div>
        {`Recommended: ${review2.recommend ? 'Yes': 'No'}`}
      </div>
    </div>
  )
}