import React, {useState, useEffect} from 'react';

export default function WriteReview () {

  const [writeReview, setWriteReview] = useState(false)

  const HandleWriteReview = () => {
    setWriteReview(!writeReview)
  }

  const writeReview2 = !writeReview ?
          <div onClick={HandleWriteReview}>
            Write Review
          </div> :
          <div onClick={HandleWriteReview}>Cancle</div>
  return (
    <div><h3>-[WriteReview conponent]</h3>
      {writeReview2}
    </div>
  )
}