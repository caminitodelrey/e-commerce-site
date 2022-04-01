import React, {useEffect, useState} from 'react';

export default function ReivewListUnit ({review}) {
  const review2 = review || {summary: '', rating: '', body:'',
    date:'', reviewer_name: '', response: '', helpfulness: 0,
    recommend: true, photos: {url: ''}};

    console.log(review2.photos[0].url)

  return (
    <div className="ratings-flexbox-container" style={{
      borderStyle: 'solid',
      borderColor: 'Green',
      }}>
      <div>titlesssss:{review2.summary}
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
      <br />
      <div>
        review:{review2.body}
      </div>
      <br />
      <div>
        {review2.photos.length !== 0 ?
          review2.photos.map((photo, key) => {
            return
          })<img src={review2.photos[0].url} />}
      </div>
      <br />
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