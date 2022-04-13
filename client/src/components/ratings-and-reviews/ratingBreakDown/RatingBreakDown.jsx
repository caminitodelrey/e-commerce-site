import React from 'react';
import PercentageBar from './PercentageBar';
import StarBreakDown from './StarBreakDown';

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

  const recommendPercentage = Math.floor(
    (Number(metaData2.recommended.true)
      / (Number(metaData2.recommended.false)
        + Number(metaData2.recommended.true)))
      * 100,
  );

  const starPercentage = (rating) => Math.floor(
    (Number(metaData2.ratings[rating])
        / (Number(metaData2.recommended.false)
          + Number(metaData2.recommended.true)))
        * 100,
  );

  const starPercentageArray = [
    { percent: starPercentage(5), star: 5 },
    { percent: starPercentage(4), star: 4 },
    { percent: starPercentage(3), star: 3 },
    { percent: starPercentage(2), star: 2 },
    { percent: starPercentage(1), star: 1 },
  ];

  return (
    <div>
      <h1>Ratings & Reviews</h1>
      <h1>{`${findRatings} / 5`}</h1>
      <StarBreakDown averageRating={findRatings} height="30" width="30" />
      <div>
        <div>
          {recommendPercentage}
          % of reviews recommend this product
        </div>
        <br />
        <div>
          {starPercentageArray.map((item) => (
            <div key={Math.random()}>
              <PercentageBar star={item.star} percent={item.percent} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
