import React, {useState, useEffect} from 'react';

export default function WriteReview () {

  const [writeReview, setWriteReview] = useState(false)
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBoday] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');

  const HandleWriteReview = () => {
    setWriteReview(!writeReview)
  }

  const summaryInputChange = (e) => {
    setReviewSummary(e.target.value);
  }

  const reviewInputChange = (e) => {
    setReviewBoday(e.target.value);
  }

  const nickNameInputChange = (e) => {
    setNickName(e.target.value);
  }

  const emailInputChange = (e) => {
    setEmail(e.target.value);
  }

  const writeReview2 = !writeReview ?
          <button onClick={HandleWriteReview}>
            Write Review
          </button> :
          <div>
            <div>
              <form>
                <div>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                </div>
                <div>Would you recommend this product?
                  <button>Yes</button>
                  <button>No</button>
                </div>
                <div >
                <label htmlFor="reviewSummary">Review Summary (optional): </label>
                  <input type="text" value={reviewSummary} name="reviewSummary" onChange={summaryInputChange}></input>
                </div>
                <div>
                  <label htmlFor="reviewBody">Review Body: </label>
                  <input type="text" value={reviewBody} name="reviewBody" onChange={reviewInputChange}></input>
                </div>
                <div>Upload photos (optional)
                  <button onClick={(e) => e.preventDefault}>Add photos</button>
                </div>
                <div>
                  <label htmlFor="nickname">Nickname: </label>
                  <input type="text" name="nickname" value={nickName} onChange={nickNameInputChange}></input>
                </div>
                <div>
                  <label htmlFor="email">Email: </label>
                  <input type="text" name="email" value={email} onChange={emailInputChange}></input>
                </div>
                <button>Submit Review</button>
              </form>
            </div>
            <button onClick={HandleWriteReview}>Cancle</button>
          </div>

  return (
    <div><h3>-[WriteReview conponent]</h3>
      {writeReview2}
    </div>
  )
}