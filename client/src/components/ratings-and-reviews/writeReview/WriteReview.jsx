import React, { useState } from 'react';
import {
  ModalContainer,
  ModalTitle,
  ModalProductName,
  ModalContent,
  ModalBody,
  TableRow,
  TableRowFeature,
  RatingsTableRow,
  RatingsTD,
} from '../../../theme/modalStyle.js';

import {
  ReviewButtons,
  WriteReviewButtons,
} from '../../../theme/buttonStyle.js';

//import AiOutlineCloseCircle from 'react-icons/ai';

export default function WriteReview({ name }) {
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
    <ReviewButtons
      type="button"
      onClick={HandleWriteReview}
      // style={{ float:"right", marginLeft: "40px"}}
    >
      Write Review
    </ReviewButtons>
  ) : (
    <ModalContainer>
      <ModalContent
        style={{
          padding: '50px',
          width: '800px'
        }}
      >
      <ModalTitle>
        <div style={{display: 'flex'}}>
          <h1>Submit Your Review</h1>
          <h2 onClick={HandleWriteReview} style={{marginLeft: '60%', cursor: 'pointer'}}>X</h2>
        </div>
        <h4>{`About the ${name}`}</h4>
      </ModalTitle>
      <ModalBody>
        <form style={{height: '400px'}}>
          <div style={{ margin: '10px 0'}}>
            <p>Would you recommend this product?*</p>
            <WriteReviewButtons type="button">Yes</WriteReviewButtons>
            <WriteReviewButtons type="button">No</WriteReviewButtons>
          </div>
          <table>
            <RatingsTableRow>
              <RatingsTD style={{ fontWeight: 'bold' }}>Overall Rating*</RatingsTD>
            </RatingsTableRow>
            <RatingsTableRow>
              <RatingsTD>
                1 Star
                <input
                  type="radio"
                  id="star1"
                  name="star"
                  value="1"
                  onClick={handleRating}
                />
              </RatingsTD>
              <RatingsTD>
                2 Stars
                <input
                  type="radio"
                  id="star2"
                  name="star"
                  value="2"
                  onClick={handleRating}
                />
              </RatingsTD>
              <RatingsTD>
                3 Stars
                <input
                  type="radio"
                  id="star3"
                  name="star"
                  value="3"
                  onClick={handleRating}
                />
              </RatingsTD>
              <RatingsTD>
                4 Stars
                <input
                  type="radio"
                  id="star1"
                  name="star"
                  value="4"
                  onClick={handleRating}
                />
              </RatingsTD>
              <RatingsTD>
                5 Stars
                <input
                  type="radio"
                  id="star1"
                  name="star"
                  value="5"
                  onClick={handleRating}
                />
              </RatingsTD>
            </RatingsTableRow>
            <RatingsTableRow>
              <RatingsTD style={{ fontWeight: 'bold' }}>Fit*</RatingsTD>
            </RatingsTableRow>
            <RatingsTableRow>
              <RatingsTD>
                Too tight
                <input
                  type="radio"
                  id="fit1"
                  name="fit"
                  value="1"
                  onClick={handleFit}
                />
              </RatingsTD>
              <RatingsTD>
                Slightly tight
                <input
                  type="radio"
                  id="fit2"
                  name="fit"
                  value="2"
                  onClick={handleFit}
                />
              </RatingsTD>
              <RatingsTD>
                Perfect
                <input
                  type="radio"
                  id="fit3"
                  name="fit"
                  value="3"
                  onClick={handleFit}
                />
              </RatingsTD>
              <RatingsTD>
                Slightly Large
                <input
                  type="radio"
                  id="fit4"
                  name="fit"
                  value="4"
                  onClick={handleFit}
                />
              </RatingsTD>
              <RatingsTD>
                Too Large
                <input
                  type="radio"
                  id="fit5"
                  name="fit"
                  value="5"
                  onClick={handleFit}
                />
              </RatingsTD>
            </RatingsTableRow>
            <RatingsTableRow>
              <RatingsTD style={{ fontWeight: 'bold' }}>Comfort*</RatingsTD>
            </RatingsTableRow>
            <RatingsTableRow>
              <RatingsTD>
                Uncomfortable
                <input
                  type="radio"
                  id="comfort1"
                  name="comfort"
                  value="1"
                  onClick={handleComfort}
                />
              </RatingsTD>
              <RatingsTD>
                Slightly Uncomfortable
                <input
                  type="radio"
                  id="comfort2"
                  name="comfort"
                  value="2"
                  onClick={handleComfort}
                />
              </RatingsTD>
              <RatingsTD>
                Medium
                <input
                  type="radio"
                  id="comfort3"
                  name="comfort"
                  value="3"
                  onClick={handleComfort}
                />
              </RatingsTD>
              <RatingsTD>
                Comfortable
                <input
                  type="radio"
                  id="comfort4"
                  name="comfort"
                  value="4"
                  onClick={handleComfort}
                />
              </RatingsTD>
              <RatingsTD>
                Perfect
                <input
                  type="radio"
                  id="comfort5"
                  name="comfort"
                  value="5"
                  onClick={handleComfort}
                />
              </RatingsTD>
            </RatingsTableRow>
            <RatingsTableRow>
              <RatingsTD style={{ fontWeight: 'bold' }}>Length*</RatingsTD>
            </RatingsTableRow>
            <RatingsTableRow>
              <RatingsTD>
                Too Short
                <input
                  type="radio"
                  id="length1"
                  name="length"
                  value="1"
                  onClick={handleLength}
                />
              </RatingsTD>
              <RatingsTD>
                Slightly Short
                <input
                  type="radio"
                  id="length2"
                  name="length"
                  value="2"
                  onClick={handleLength}
                />
              </RatingsTD>
              <RatingsTD>
                Perfect
                <input
                  type="radio"
                  id="length3"
                  name="length"
                  value="3"
                  onClick={handleLength}
                />
              </RatingsTD>
              <RatingsTD>
                Slightly Long
                <input
                  type="radio"
                  id="length4"
                  name="length"
                  value="4"
                  onClick={handleLength}
                />
              </RatingsTD>
              <RatingsTD>
                Too Long
                <input
                  style={{display: 'inline-block'}}
                  type="radio"
                  id="length5"
                  name="length"
                  value="5"
                  onClick={handleLength}
                />
              </RatingsTD>
            </RatingsTableRow>
            <RatingsTableRow>
              <RatingsTD style={{ fontWeight: 'bold' }}>
                Quality*
              </RatingsTD>
            </RatingsTableRow>
            <RatingsTableRow>
              <RatingsTD>
                Low Quality
                <input
                  type="radio"
                  id="qulity1"
                  name="qulity"
                  value="1"
                  onClick={handleQuality}
                />
              </RatingsTD>
              <RatingsTD>
                Slightly Low Quality
                <input
                  type="radio"
                  id="qulity2"
                  name="qulity"
                  value="2"
                  onClick={handleQuality}
                />
              </RatingsTD>
              <RatingsTD>
                Medium
                <input
                  type="radio"
                  id="qulity3"
                  name="qulity"
                  value="3"
                  onClick={handleQuality}
                />
              </RatingsTD>
              <RatingsTD>
                High Quality
                <input
                  type="radio"
                  id="qulity4"
                  name="qulity"
                  value="4"
                  onClick={handleQuality}
                />
              </RatingsTD>
              <RatingsTD>
                Perfect
                <input
                  type="radio"
                  id="qulity5"
                  name="qulity"
                  value="5"
                  onClick={handleQuality}
                />
              </RatingsTD>
            </RatingsTableRow>
          </table>

          <div style={{ margin: '10px 0'}}>
            <label htmlFor="reviewSummary">
              Review Summary (optional):
              <br />
              <textarea
                type="text"
                value={reviewSummary}
                name="reviewSummary"
                onChange={summaryInputChange}
                placeholder="Best purchase ever!"
              />
            </label>
          </div>
          <div style={{ margin: '10px 0'}}>
            <label htmlFor="reviewBody">
              Review Body*:
              <br />
              <textarea
                type="text"
                value={reviewBody}
                name="reviewBody"
                onChange={reviewInputChange}
                placeholder="Why did you like the product or not?"
              />
            </label>
          </div>
          <div style={{ margin: '10px 0'}}>
            <p>Upload photos (optional)</p>
            <WriteReviewButtons type="button" onClick={(e) => e.preventDefault}>
              Add photos
            </WriteReviewButtons>
          </div>

          <table>
            <RatingsTableRow>
              <td style={{ paddingRight: '10px' }}>Nickname*:</td>
              <td>
                <input
                  type="text"
                  name="nickname"
                  value={nickName}
                  onChange={nickNameInputChange}
                  placeholder="jackson11!"
                />
              </td>
            </RatingsTableRow>
            <RatingsTableRow>
              <td style={{ paddingRight: '10px' }}>
                Email*:
              </td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={emailInputChange}
                  placeholder="jackson11@email.com"
                />

              </td>
            </RatingsTableRow>
          </table>

          <WriteReviewButtons type="button">Submit Review</WriteReviewButtons>
          <WriteReviewButtons type="button" onClick={HandleWriteReview}>
            Close
          </WriteReviewButtons>
        </form>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );

  return <div>{writeReview2}</div>;
}
