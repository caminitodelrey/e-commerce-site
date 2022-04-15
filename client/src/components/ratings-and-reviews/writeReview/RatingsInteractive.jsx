import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function RatingsInteractive ({handleRating}) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      <h4>Overall rating</h4>
      {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={Math.random()}>
                  <input
                    style={{display:'none'}}
                    type='radio'
                    name='rating'
                    value={ratingValue}
                    onClick={() => {handleRating(ratingValue);}}
                    onClick={() => {setRating(ratingValue)}}
                  ></input>
                  <FaStar
                    style={{cursor: 'pointer', transition: 'color 500ms'}}
                    className='star'
                    size={30}
                    color={
                      ratingValue <= (hover || rating) ? '#FFC107' : '#E4E5E9'
                    }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
    </div>
    );


}


