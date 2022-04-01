import React, {useEffect, useState} from 'react';

export default function ReivewListUnit ({review}) {
  const review2 = review || {summary: '', rating: '', body:'', date:'', reviewer_name: ''};

  return (
    <div>
      <p>-----------</p>
      <p>title:{review2.summary}
        <span>rating:{review2.rating}</span>
        <span>{review2.reviewer_name}</span>
        <span>{review2.date}</span>
      </p>
      <p>review:{review2.body}</p>
    </div>
  )
}