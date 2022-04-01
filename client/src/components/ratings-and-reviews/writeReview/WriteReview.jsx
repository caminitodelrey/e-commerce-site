import React, {useState, useEffect} from 'react';

export default function WriteReview () {

  const [writeReview, setWriteReview] = useState(false)

  const HandleWriteReview = () => {
    setWriteReview(!writeReview)
  }

  const writeReview2 = !writeReview ?
          <button onClick={HandleWriteReview}>
            Write Review
          </button> :
          <button onClick={HandleWriteReview}>Cancle</button>
  return (
    <div><h3>-[WriteReview conponent]</h3>
      {writeReview2}
    </div>
  )
}