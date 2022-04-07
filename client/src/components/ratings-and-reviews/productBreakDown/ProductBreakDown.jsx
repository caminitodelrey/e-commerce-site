import React, { useState, useEffect } from 'react';
import PercentageBar from '../ratingBreakDown/PercentageBar.jsx';

export default function ProductBreakDown({ metaData }) {
  metaData = metaData || {
    product_id: '37311',
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

  return (
    <div>
      <br />
      <br />
      <div>
        {`Size ${metaData.characteristics.Fit.value}`}
        {/* <PercentageBar
          percent={Math.floor((metaData.characteristics.Fit.value / 5) * 100)}
        /> */}
      </div>
      <div>{`Comfort ${metaData.characteristics.Comfort.value}`}</div>
    </div>
  );
}
