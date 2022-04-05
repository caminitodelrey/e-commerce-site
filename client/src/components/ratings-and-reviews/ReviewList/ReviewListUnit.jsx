import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import moment from 'moment';

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

  const [singleReview, setSingleReview] = useState(review2);

  const handleHelpful = () => {
    setSingleReview({ ...review2, helpfulness: review2.helpfulness + 1 });
  };

  const handleReport = () => {
    setSingleReview({ ...review2, helpfulness: review2.helpfulness - 1 });
  };

  return (
    <div
      className="ratings-flexbox-container"
      style={{
        borderStyle: 'solid',
        borderColor: 'Green',
      }}
    >
      <div>
        <span className="ratings-starRatings">
          <span className="rating-star">*</span>
          <span className="rating-star">*</span>
          <span className="rating-star">*</span>
          <span className="rating-star">*</span>
          <span className="rating-star">*</span>
          rating:
          {singleReview.rating}
        </span>
        {' '}
        <span>
          {singleReview.reviewer_name}
          ,
        </span>
        {' '}
        <span>{moment(singleReview.date).format('MMMM Do YYYY')}</span>
      </div>
      <div>
        <h4>
          {singleReview.summary}
        </h4>
      </div>
      <br />
      <div>
        {singleReview.body}
      </div>
      <br />
      <div>
        {singleReview.photos.map((photo) => (
          <span key={photo.id}>
            <img style={{ height: '150px', weight: '150px' }} src={photo.url} alt="" />
          </span>
        ))}
      </div>
      <br />
      <div>{singleReview.response ? `Response: ${singleReview.response}` : null}</div>
      <div>
        {singleReview.recommend ? <AiOutlineCheck /> : null}
        {singleReview.recommend ? '| I recommend this product' : null}
      </div>
      <br />
      <div style={{}}>
        Helpful?
        {' '}
        <span
          className="helpful"
          role="button"
          onKeyPress={null}
          tabIndex={0}
          onClick={handleHelpful}
        >
          {`Yes ${singleReview.helpfulness} |`}
        </span>
        <span
          className="helpful"
          role="button"
          onKeyPress={null}
          tabIndex={0}
          onClick={handleReport}
        >
          {' '}
          Report
        </span>
      </div>
    </div>
  );
}
