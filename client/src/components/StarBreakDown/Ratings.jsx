import React from 'react';
import StarBreakDown from './StarBreakDown.jsx';

export default function Ratings({ rating }) {

  const total = (
    Object.values(rating)
      .map((num) => Number(num))
      .reduce((prev, cur) => prev + cur)
  );

  const averageRating = (
    Object.values(rating)
      .map((num, i) => Number(num) * Number(i + 1))
      .reduce((prev, cur) => prev + cur)
      / total
  ).toFixed(1);

  return (
    <>
      <StarBreakDown
        averageRating={averageRating}
        height='15'
        width='15'
      />
    </>
  );
}
