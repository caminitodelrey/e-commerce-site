import React, { useState } from 'react';

export default function WriteReview() {
  const [writeReview, setWriteReview] = useState(false);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBoday] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState(true);
  const [comfort, setComfort] = useState('');
  const [quality, setQuality] = useState('');
  const [length, setLength] = useState('');
  const [fit, setFit] = useState('');
  const [starRating, setStarRating] = useState('');

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

  const handleFit = (e) => {
    setFit(e.target.value);
  };

  const handleComfort = (e) => {
    setComfort(e.target.value);
  };

  const writeReview2 = !writeReview ? (
    <button type="button" onClick={HandleWriteReview}>
      Write Review
    </button>
  ) : (
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
            <b>Fit</b>
            <br />
            <label htmlFor="fit1">
              Runs tight
              <input type="radio" id="fit1" name="fit" value="1" onClick={handleFit} />
            </label>
            <label htmlFor="fit2">
              Runs slightly tight
              <input type="radio" id="fit2" name="fit" value="2" onClick={handleFit} />
            </label>
            <label htmlFor="fit3">
              Runs Perfect
              <input type="radio" id="fit3" name="fit" value="3" onClick={handleFit} />
            </label>
            <label htmlFor="fit4">
              Runs slightly large
              <input type="radio" id="fit4" name="fit" value="4" onClick={handleFit} />
            </label>
            <label htmlFor="fit5">
              Runs large
              <input type="radio" id="fit5" name="fit" value="5" onClick={handleFit} />
            </label>
          </div>
          <div>
            <b>Comfort</b>
            <br />
            <label htmlFor="comfort1">
              Uncomfortable
              <input type="radio" id="comfort1" name="comfort" value="1" onClick={handleComfort} />
            </label>
            <label htmlFor="comfort2">
              Runs slightly tight
              <input type="radio" id="comfort2" name="comfort" value="2" onClick={handleComfort} />
            </label>
            <label htmlFor="comfort3">
              Runs Perfect
              <input type="radio" id="comfort3" name="comfort" value="3" onClick={handleComfort} />
            </label>
            <label htmlFor="comfort4">
              Runs slightly large
              <input type="radio" id="comfort4" name="comfort" value="4" onClick={handleComfort} />
            </label>
            <label htmlFor="comfort5">
              Runs large
              <input type="radio" id="comfort5" name="comfort" value="5" onClick={handleComfort} />
            </label>
          </div>
          <div>
            <label htmlFor="reviewSummary">
              Review Summary (optional):
              <br />
              <textarea
                type="text"
                value={reviewSummary}
                name="reviewSummary"
                onChange={summaryInputChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="reviewBody">
              Review Body:
              <br />
              <textarea
                type="text"
                value={reviewBody}
                name="reviewBody"
                onChange={reviewInputChange}
              />
            </label>
          </div>
          <div>
            Upload photos (optional)
            <button type="button" onClick={(e) => e.preventDefault}>
              Add photos
            </button>
          </div>
          <div>
            <label htmlFor="nickname">
              Nickname:
              <input
                type="text"
                name="nickname"
                value={nickName}
                onChange={nickNameInputChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="text"
                name="email"
                value={email}
                onChange={emailInputChange}
              />
            </label>
          </div>
          <button type="button">Submit Review</button>
        </form>
      </div>
      <button type="button" onClick={HandleWriteReview}>
        Cancle
      </button>
    </div>
  );

  return (
    <div>
      {writeReview2}
    </div>
  );
}
