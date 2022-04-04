import React from 'react';

export default function ReivewListUnit({ review }) {
  const review2 = review || {
    summary: '',
    rating: '',
    body: '',
    date: '',
    reviewer_name: '',
    response: '',
    helpfulness: 0,
    recommend: true,
    photos: { url: '' },
  };

  // console.log(review2.photos[0].url)

  return (
    <div
      className="ratings-flexbox-container"
      style={{
        borderStyle: 'solid',
        borderColor: 'Green',
      }}
    >
      <div>
        title:
        {review2.summary}
        <div className="ratings-starRatings">
          <span className="rating-star">*</span>
          <span className="rating-star">*</span>
          <span className="rating-star">*</span>
          <span className="rating-star">*</span>
          <span className="rating-star">*</span>
          rating:
          {review2.rating}
        </div>
        <br />
        <span>{review2.reviewer_name}</span>
        <br />
        <span>{review2.date}</span>
      </div>
      <br />
      <div>
        review:
        {review2.body}
      </div>
      <br />
      <div>
        {review2.photos.map((photo) => (
          <div key={photo.id}>
            <span>
              <img src={photo.url} alt="" />
            </span>
          </div>
        ))}
      </div>
      <br />
      <div>{review2.response ? `Response: ${review2.response}` : null}</div>

      <div>{`${review2.recommend ? 'I recommend this product' : null}`}</div>
      <br />
      <div>{`Helpfulness: Yes ${review2.helpfulness} | Report`}</div>
    </div>
  );
}
