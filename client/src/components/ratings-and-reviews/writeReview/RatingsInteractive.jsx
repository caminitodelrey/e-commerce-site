import React, { useState } from 'react';

export default function RatingsInteractive () {
  //starsArr: [0,0,0,0,0],
  //oldArr: [0,0,0,0,0]
  const [starsArr, setStarArr] = useState([0,0,0,0,0]);
  const [oldArr, setOldArr] = useState([0,0,0,0,0]);


// .single-star-outline {
//   height: 36px;
//   width: 31px;
// }

// .single-star-fill {
//   position: relative;
//   display: inline-block;
//   height: 36px;
//   background-color: #333333;
// }

// .single-star-container {
//   height: 36px;
//   width: 31px;
//   display: inline-block;
// }

  const handleStarsHover = (event) => {
    event.preventDefault();
    let rating = parseInt(event.target.getAttribute("value"))+1;
    let newArr = [];
    while (newArr.length < 5) {
        if (rating > 0) {
            rating--;
            newArr.push(1);
        } else {
            newArr.push(0);
        }
    }
    setStarArr(newArr);
  }

  const handleStarsClick = (event) => {
      event.preventDefault();
      setOldArr(starsArr);
  }

  const handleStarsLeave = (event) => {
      event.preventDefault();
      setStarArr(oldArr);
  }

  return (
    <div>
      <h1>Rate out of 5 Stars Change?</h1>
      {starsArr.map((item, i) => {
          return (
              <div
                style={{
                  height: '36px',
                  width: '31px',
                  display: 'inline-block'
                }} className="single-star-container" value={i} key={i} onMouseOver={handleStarsHover} onClick={handleStarsClick} onMouseLeave={handleStarsLeave}>
                  <div style={{
                    position: 'relative',
                    display: 'inline-block',
                    height: '36px',
                    backgroundColor: '#333333'}} className="single-star-fill" style={{"width" : `${parseInt(item*31)}px`}}>
                      <img style={{height: '36px',
                    width: '31px'}} className="single-star-outline" src="star.png" value={i} ></img>
                  </div>
              </div>
          );
        })}
    </div>
    );


}