import React from 'react';
// import PercentageBar from '../ratingBreakDown/PercentageBar.jsx';
import ProductBarBreakDown from './ProductBarBreakDown';

export default function ProductBreakDown({ metaData }) {
  const metaDataProduct = metaData || {
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
  const percentFit = Math.floor(
    !metaDataProduct.characteristics.Fit ? 0
      : (metaDataProduct.characteristics.Fit.value / 5) * 100,
  );

  const percentLength = Math.floor(
    !metaDataProduct.characteristics.Length ? 0
      : (metaDataProduct.characteristics.Length.value / 5) * 100,
  );

  const percentComfort = Math.floor(
    !metaDataProduct.characteristics.Comfort ? 0
      : (metaDataProduct.characteristics.Comfort.value / 5) * 100,
  );

  const percentQuality = Math.floor(
    !metaDataProduct.characteristics.Quality ? 0
      : (metaDataProduct.characteristics.Quality.value / 5) * 100,
  );

  const percentCharArr = [
    { percent: percentFit, characteristic: 'Fit', fit: ['Poor', 'Perfect'] },
    { percent: percentLength, characteristic: 'Length', fit: ['Too short', 'Too long'] },
    { percent: percentComfort, characteristic: 'Comfort', fit: ['Poor', 'Perfect'] },
    { percent: percentQuality, characteristic: 'Quality', fit: ['Poor', 'Perfect'] },
  ];

  // return (
  //   <div>
  //     <br />
  //     <br />
  //     <div>
  //       {`Size ${metaData.characteristics.Fit.value}`}
  //       {/* <PercentageBar
  //         percent={Math.floor((metaData.characteristics.Fit.value / 5) * 100)}
  //       /> */}
  //     </div>
  //     <div>{`Comfort ${metaData.characteristics.Comfort.value}`}</div>
  //   </div>
  // );
  return (
    <div style={{
      paddingTop: '20px',
    }}
    >
      {percentCharArr.map((product) => (
        <div key={Math.random()}>
          <ProductBarBreakDown product={product} />
        </div>
      ))}
    </div>
  );
}
