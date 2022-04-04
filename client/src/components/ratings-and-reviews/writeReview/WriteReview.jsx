import React, { useState } from 'react';

export default function WriteReview() {
  const [writeReview, setWriteReview] = useState(false);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBoday] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');

  const HandleWriteReview = () => {
    setWriteReview(!writeReview);
  };

  const summaryInputChange = (e) => {
    setReviewSummary(e.target.value);
  };

  const reviewInputChange = (e) => {
    setReviewBoday(e.target.value);
  };

  const nickNameInputChange = (e) => {
    setNickName(e.target.value);
  };

  const emailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const writeReview2 = !writeReview
    ? (
      <button type="button" onClick={HandleWriteReview}>
        Write Review
      </button>
    )
    : (
      <div>
        <div>
          <form>
            <div>
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
            <div>
              Would you recommend this product?
              <button type="button">Yes</button>
              <button type="button">No</button>
            </div>
            <div>
              <label htmlFor="reviewSummary">
                Review Summary (optional):
                <input type="text" value={reviewSummary} name="reviewSummary" onChange={summaryInputChange} />
              </label>
            </div>
            <div>
              <label htmlFor="reviewBody">
                Review Body:
                <input type="text" value={reviewBody} name="reviewBody" onChange={reviewInputChange} />
              </label>
            </div>
            <div>
              Upload photos (optional)
              <button type="button" onClick={(e) => e.preventDefault}>Add photos</button>
            </div>
            <div>
              <label htmlFor="nickname">
                Nickname:
                <input type="text" name="nickname" value={nickName} onChange={nickNameInputChange} />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                Email:
                <input type="text" name="email" value={email} onChange={emailInputChange} />
              </label>
            </div>
            <button type="button">Submit Review</button>
          </form>
        </div>
        <button type="button" onClick={HandleWriteReview}>Cancle</button>
      </div>
    );

  return (
    <div>
      <h3>-[WriteReview conponent]</h3>
      {writeReview2}
    </div>
  );
}
