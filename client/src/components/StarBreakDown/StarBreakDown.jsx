import React from 'react';
import { StarImg } from '../../theme/globalStyle';

function StarBreakDown({ averageRating, height, width }) {
  let rating = averageRating || 0;
  const stars = [];
  while (stars.length < 5) {
    if (rating > 1) {
      stars.push(1);
    } else if (rating > 0) {
      const empty = Math.abs(0 - rating);
      const quart = Math.abs(0.25 - rating);
      const half = Math.abs(0.5 - rating);
      const three = Math.abs(0.75 - rating);
      const full = Math.abs(1 - rating);
      const closest = Math.min(empty, quart, half, three, full);
      switch (closest) {
        case (empty):
          stars.push(0);
          break;
        case quart:
          stars.push(0.28);
          break;
        case half:
          stars.push(0.5);
          break;
        case three:
          stars.push(0.72);
          break;
        case full:
          stars.push(1.0);
          break;
        default:
          stars.push(0);
          break;
      }
    } else {
      stars.push(0);
    }
    rating -= 1;
  }

  return (
    <div>
      {stars.map((item) => (
        <div
          style={{
            height: `${height}px`,
            width: `${width}px`,
            display: 'inline-block',
          }}
          key={Math.random()}
        >
          <div style={{
            position: 'relative',
            display: 'inline-block',
            height: `${height}px`,
            backgroundColor: 'var(--dark-green)',
            width: `${parseInt(item * width, 10)}px`,
          }}
          >
            <StarImg
              style={{
                height: `${height}px`,
                width: `${width}px`,
              }}
              src="star.png"
              alt="stars alt"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default StarBreakDown;
