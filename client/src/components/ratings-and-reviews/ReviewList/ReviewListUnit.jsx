import React, {useEffect, useState} from 'react';

export default function ReivewListUnit ({review}) {
  const review2 = review || {summary: '', rating: '', body:'',
    date:'', reviewer_name: '', response: '', helpfulness: 0, recommend: true};

  return (
    <div>
      <p>-----------</p>
      <p>title:{review2.summary}
        <br />
        <span>rating:{review2.rating}</span>
        <br />
        <span>{review2.reviewer_name}</span>
        <br />
        <span>{review2.date}</span>
      </p>
      <p>review:{review2.body}</p>

      <div>
        {`Response: ${review2.response}`}
      </div>

      <div>
        {`Helpfulness: ${review2.helpfulness}`}
      </div>

      <div>
        {`Recommended: ${review2.recommend}`}
      </div>
    </div>
  )
}