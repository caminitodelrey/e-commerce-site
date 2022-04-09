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

  const handleLength = (e) => {
    setLength(e.target.value);
  };

  const handleQuality = (e) => {
    setQuality(e.target.value);
  };

  const handleRating = (e) => {
    setStarRating(e.target.value);
  };

  const writeReview2 = !writeReview ? (
    <button
      style={{
        float: 'left',
        padding: '10px',
        textTransform: 'uppercase',
        fontSize: '15px',
      }}
      type="button"
      onClick={HandleWriteReview}
    >
      Write Review
    </button>
  ) : (
    <div>
      <div
        style={{
          position: 'fixed',
          left: '0',
          top: '0',
          zindex: 5,
          background: 'rgba(255, 255, 255, 0.7)',
          padding: '50px',
          width: '100%',
          height: '100%',
        }}
      >
        <form
          style={{
            background: 'lightskyblue',
            padding: '50px',
            width: '650px',
            position: 'absolute',
            left: '50%',
            marginLeft: '-425px',
            fontFamily: 'sans-serif',
          }}
        >
          <div>
            Would you recommend this product?
            <button type="button">Yes</button>
            <button type="button">No</button>
          </div>

          <table>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Rating</td>
            </tr>
            <tr>
              <td>
                1 Star
                <input
                  type="radio"
                  id="star1"
                  name="star"
                  value="1"
                  onClick={handleRating}
                />
              </td>
              <td>
                2 Star
                <input
                  type="radio"
                  id="star2"
                  name="star"
                  value="2"
                  onClick={handleRating}
                />
              </td>
              <td>
                3 Star
                <input
                  type="radio"
                  id="star3"
                  name="star"
                  value="3"
                  onClick={handleRating}
                />
              </td>
              <td>
                4 Star
                <input
                  type="radio"
                  id="star1"
                  name="star"
                  value="4"
                  onClick={handleRating}
                />
              </td>
              <td>
                5 Star
                <input
                  type="radio"
                  id="star1"
                  name="star"
                  value="5"
                  onClick={handleRating}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Fit</td>
            </tr>
            <tr>
              <td>
                Too tight
                <input
                  type="radio"
                  id="fit1"
                  name="fit"
                  value="1"
                  onClick={handleFit}
                />
              </td>
              <td>
                Slightly tight
                <input
                  type="radio"
                  id="fit2"
                  name="fit"
                  value="2"
                  onClick={handleFit}
                />
              </td>
              <td>
                Perfect
                <input
                  type="radio"
                  id="fit3"
                  name="fit"
                  value="3"
                  onClick={handleFit}
                />
              </td>
              <td>
                Slightly Large
                <input
                  type="radio"
                  id="fit4"
                  name="fit"
                  value="4"
                  onClick={handleFit}
                />
              </td>
              <td>
                Too Large
                <input
                  type="radio"
                  id="fit5"
                  name="fit"
                  value="5"
                  onClick={handleFit}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Comfort</td>
            </tr>
            <tr>
              <td>
                Uncomfortable
                <input
                  type="radio"
                  id="comfort1"
                  name="comfort"
                  value="1"
                  onClick={handleComfort}
                />
              </td>
              <td>
                Slightly Uncomfortable
                <input
                  type="radio"
                  id="comfort2"
                  name="comfort"
                  value="2"
                  onClick={handleComfort}
                />
              </td>
              <td>
                Medium
                <input
                  type="radio"
                  id="comfort3"
                  name="comfort"
                  value="3"
                  onClick={handleComfort}
                />
              </td>
              <td>
                Comfortable
                <input
                  type="radio"
                  id="comfort4"
                  name="comfort"
                  value="4"
                  onClick={handleComfort}
                />
              </td>
              <td>
                Perfect
                <input
                  type="radio"
                  id="comfort5"
                  name="comfort"
                  value="5"
                  onClick={handleComfort}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Length</td>
            </tr>
            <tr>
              <td>
                Too Short
                <input
                  type="radio"
                  id="length1"
                  name="length"
                  value="1"
                  onClick={handleLength}
                />
              </td>
              <td>
                Slightly Short
                <input
                  type="radio"
                  id="length2"
                  name="length"
                  value="2"
                  onClick={handleLength}
                />
              </td>
              <td>
                Perfect
                <input
                  type="radio"
                  id="length3"
                  name="length"
                  value="3"
                  onClick={handleLength}
                />
              </td>
              <td>
                Slightly Long
                <input
                  type="radio"
                  id="length4"
                  name="length"
                  value="4"
                  onClick={handleLength}
                />
              </td>
              <td>
                Too Long
                <input
                  type="radio"
                  id="length5"
                  name="length"
                  value="5"
                  onClick={handleLength}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>
                quality
              </td>
            </tr>
            <tr>
              <td>
                Low Quality
                <input
                  type="radio"
                  id="qulity1"
                  name="qulity"
                  value="1"
                  onClick={handleQuality}
                />
              </td>
              <td>
                Slightly Low Quality
                <input
                  type="radio"
                  id="qulity2"
                  name="qulity"
                  value="2"
                  onClick={handleQuality}
                />
              </td>
              <td>
                Medium
                <input
                  type="radio"
                  id="qulity3"
                  name="qulity"
                  value="3"
                  onClick={handleQuality}
                />
              </td>
              <td>
                High Quality
                <input
                  type="radio"
                  id="qulity4"
                  name="qulity"
                  value="4"
                  onClick={handleQuality}
                />
              </td>
              <td>
                Perfect
                <input
                  type="radio"
                  id="qulity5"
                  name="qulity"
                  value="5"
                  onClick={handleQuality}
                />
              </td>
            </tr>
          </table>

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

          <table>
            <tr>
              <td>Nickname:</td>
              <td>
                <input
                  type="text"
                  name="nickname"
                  value={nickName}
                  onChange={nickNameInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                Email:
              </td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={emailInputChange}
                />

              </td>
            </tr>
          </table>

          <button type="button">Submit Review</button>
          <button type="button" onClick={HandleWriteReview}>
            Close
          </button>
        </form>
      </div>
    </div>
  );

  return <div>{writeReview2}</div>;
}
