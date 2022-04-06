import React from 'react';

export default function RatingBreakDown({ metaData }) {
  const metaData2 = metaData || {
    product_id: '37312',
    ratings: {
      1: '10',
      2: '16',
      3: '41',
      4: '27',
      5: '101',
    },
    recommended: {
      false: '29',
      true: '166',
    },
    characteristics: {
      Fit: {
        id: 125031,
        value: '3.2320000000000000',
      },
      Length: {
        id: 125032,
        value: '3.1376811594202899',
      },
      Comfort: {
        id: 125033,
        value: '3.2626262626262626',
      },
      Quality: {
        id: 125034,
        value: '3.2959183673469388',
      },
    },
  };
  const findRatings = (
    Object.values(metaData2.ratings)
      .map((num, i) => Number(num) * Number(i + 1))
      .reduce((pre, cur) => pre + cur)
      / (Number(metaData2.recommended.false) + Number(metaData2.recommended.true))
  ).toFixed(1);

  const recommendPercentage = Math.floor((
    Number(metaData2.recommended.true)
      / (Number(metaData2.recommended.false) + Number(metaData2.recommended.true))
  ) * 100);

  return (
    <div>
      <h4>RATINGS & REVIEWS</h4>
      <h1>{findRatings}</h1>
      <div>
        <div>
          {recommendPercentage}
          % of reviews recommend this product
        </div>
        <br />
        <div>
          <u>5 stars</u>
        </div>
        <div>
          <u>4 stars</u>
        </div>
        <div>
          <u>3 stars</u>
        </div>
        <div>
          <u>2 stars</u>
        </div>
        <div>
          <u>1 stars</u>
        </div>
      </div>
    </div>
  );
}
