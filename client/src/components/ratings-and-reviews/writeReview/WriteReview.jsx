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
  ButtonDefaultLG,
  ButtonDefaultSM,
} from '../../../theme/buttonStyle.js';

import AddPhoto from './AddPhoto.jsx';
import RatingsInteractive from './RatingsInteractive.jsx';

export default function WriteReview({ name }) {
  const [showPic, setShowPic] = useState(false);
  const [picUrlContainer, setPicUrlContainer] = useState([]);
  const [picUrl, setPicUrl] = useState('');
  const [showAddPhoto, setShowAddPhoto] = useState(false);
  const [writeReview, setWriteReview] = useState(false);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBoday] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState(true);
  const [comfort, setComfort] = useState(0);
  const [quality, setQuality] = useState(0);
  const [length, setLength] = useState(0);
  const [fit, setFit] = useState(0);
  const [starRating, setStarRating] = useState(0);

  const handleRecommendYes = (e) => {
    e.preventDefault();
    setRecommend(true);
  };

  const handleRecommendNo = (e) => {
    e.preventDefault();
    setRecommend(false);
  };

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

  const handleRating = (num) => {
    setStarRating(num);
  };

  const handleShowAddPhoto = (e) => {
    setPicUrl(e)
  }

  const toggleAddPhoto = (e) => {
    e.preventDefault();
    setShowAddPhoto(!showAddPhoto);
  }

  const addDefaultSrc = (ev) => {
    alert('404 Picture not found')
    ev.target.src = 'https://http.cat/404';
  }

  const handleShowPic = (e) => {

    setShowPic(!showPic);
    setPicUrl('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (starRating == 0) {
      return alert('Please enter rating.');
    } else if (fit == 0) {
      return alert('Please enter fit.');
    } else if (comfort == 0) {
      return alert('Please enter comfort.');
    } else if (length == 0) {
      return alert('Please enter length.');
    } else if (quality == 0) {
      return alert('Please enter quality.');
    } else if (reviewBody == '') {
      return alert('Please add a review.');
    } else if (nickName == '') {
      return alert('Please enter a Nickname.');
    } else if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      ) ||
      email.length > 60 ||
      email.length === 0
    ) {
      return alert(
        "Please make sure email is in proper format. ex: 'jackma@taobao.com'",
      );
    } else {
      setWriteReview(!writeReview);
    }
  };

  const writeReview2 = !writeReview ? (
    <ButtonDefaultLG
      onClick={HandleWriteReview}
      // style={{ float:"right", marginLeft: "40px"}}
    >
      Write Review
    </ButtonDefaultLG>
  ) : (
    <ModalContainer>
      <ModalContent
        style={{
          padding: '50px',
          width: '800px',
        }}
      >
        <ModalTitle>
          <div>
            <div style={{ display: 'flex' }}>
              <h1>Submit Your Review</h1>
              <h1
                style={{ marginLeft: '65%', cursor: 'pointer' }}
                onClick={HandleWriteReview}
              >
                X
              </h1>
            </div>
            <h2 style={{ marginTop: '0', color: 'rgb(3, 115, 83)' }}>{`About the ${name}`}</h2>
          </div>
        </ModalTitle>
        <ModalBody>
          <form style={{ height: '400px' }}>
            <div style={{ margin: '10px 0' }}>
              <p>Would you recommend this product*?</p>
              {recommend ? (
                <div>
                  <ButtonDefaultSM
                    style={{
                      backgroundColor: 'rgba(11,191,125,.9)',
                      color: 'white',
                    }}
                    onClick={handleRecommendYes}
                  >
                    Yes
                  </ButtonDefaultSM>
                  <ButtonDefaultSM onClick={handleRecommendNo}>
                    No
                  </ButtonDefaultSM>
                </div>
              ) : (
                <div>
                  <ButtonDefaultSM onClick={handleRecommendYes}>
                    Yes
                  </ButtonDefaultSM>
                  <ButtonDefaultSM
                    style={{
                      backgroundColor: 'rgba(11,191,125,.9)',
                      color: 'white',
                    }}
                    onClick={handleRecommendNo}
                  >
                    No
                  </ButtonDefaultSM>
                </div>
              )}
            </div>
            <RatingsInteractive handleRating={handleRating}/>
            <br />
            <table>
              <tbody>


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
                      style={{ display: 'inline-block' }}
                      type="radio"
                      id="length5"
                      name="length"
                      value="5"
                      onClick={handleLength}
                    />
                  </RatingsTD>
                </RatingsTableRow>
                <RatingsTableRow>
                  <RatingsTD style={{ fontWeight: 'bold' }}>Quality*</RatingsTD>
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
              </tbody>
            </table>

            <div style={{ margin: '10px 0' }}>
              <label htmlFor="reviewSummary">
                Review Summary (optional):
                <br />
                <textarea
                  style={{ height: '50px', width: '50%' }}
                  type="text"
                  value={reviewSummary}
                  name="reviewSummary"
                  onChange={summaryInputChange}
                  placeholder="Best purchase ever!"
                />
              </label>
            </div>
            <div style={{ margin: '10px 0' }}>
              <label htmlFor="reviewBody">
                Review Body*:
                <br />
                <textarea
                  style={{ height: '50px', width: '50%' }}
                  type="text"
                  value={reviewBody}
                  name="reviewBody"
                  onChange={reviewInputChange}
                  placeholder="Why did you like the product or not?"
                />
              </label>
            </div>
            <div style={{ margin: '10px 0' }}>
              <p>Upload photos (optional)</p>
              {picUrl !== '' ?
                <div>
                  <img
                    style={{height: '65px', width: '50px'}}
                    src={picUrl}
                    onError={addDefaultSrc}
                  />
                </div>
               : null
              }
              <ButtonDefaultSM onClick={(e)=> toggleAddPhoto(e)}>
                Add photos
              </ButtonDefaultSM>
              <ButtonDefaultSM
                onClick={(e)=> {
                  e.preventDefault();
                  setPicUrl('');
                }}
              >
                Clear photos
              </ButtonDefaultSM>
              <>
                {!showAddPhoto ? null
                  : <AddPhoto
                      handleShowPic={handleShowPic}
                      handleShowAddPhoto={handleShowAddPhoto}
                      toggleAddPhoto={toggleAddPhoto}
                    />}
              </>
            </div>

            <table>
              <tbody>
                <RatingsTableRow>
                  <td style={{ paddingRight: '10px' }}>Nickname*:</td>
                  <td>
                    <input
                      type="text"
                      name="nickname"
                      value={nickName}
                      onChange={nickNameInputChange}
                      placeholder="jack111"
                    />
                  </td>
                </RatingsTableRow>
                <RatingsTableRow>
                  <td style={{ paddingRight: '10px' }}>Email*:</td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={emailInputChange}
                      placeholder="jack111@email.com"
                    />
                  </td>
                </RatingsTableRow>
              </tbody>
            </table>

            <ButtonDefaultSM onClick={handleSubmit}>
              Submit Review
            </ButtonDefaultSM>
            <ButtonDefaultSM onClick={HandleWriteReview}>Close</ButtonDefaultSM>
          </form>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );

  return <div>{writeReview2}</div>;
}
