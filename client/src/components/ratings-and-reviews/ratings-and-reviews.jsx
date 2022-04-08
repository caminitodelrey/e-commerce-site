import React, { useEffect, useState } from 'react';
import getData from '../../../helper.js';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakDown from './ratingBreakDown/RatingBreakDown.jsx';
import WriteReview from './writeReview/WriteReview.jsx';
// import Sort from './sort/Sort.jsx';
import ProductBreakDown from './productBreakDown/ProductBreakDown.jsx';

export default function RatingsReviews({ product }) {
  const [reviews, setReviews] = useState([]);
  const [metaData, setMetaData] = useState('');

  useEffect(() => {
    getData(
      `reviews?page=1&count=1000&sort=relevant&product_id=${product.id}`,
    ).then(({ data }) => {
      setReviews(data.results);
    });

    getData(`reviews/meta?product_id=${product.id}`).then(({ data }) => {
      setMetaData(data);
    });
  }, []);

  const handleDropDown = (e) => {
    let dropDown = 'relevant';
    if (e.target.value === '1') {
      dropDown = 'helpful';
    } else if (e.target.value === '2') {
      dropDown = 'newest';
    } else if (e.target.value === '0') {
      dropDown = 'relevant';
    }
    getData(
      `reviews?page=2&count=20&sort=${dropDown}&product_id=${product.id}`,
    ).then(({ data }) => {
      setReviews(data.results);
    });
  };

  const reviewCount = metaData.recommended || { true: 0, false: 0 };

  return (
    <div>
      <div style={{
        float: 'left',
        width: '30%',
      }}
      >
        <div style={{ marginLeft: '40px' }}>
          <RatingBreakDown metaData={metaData} />
        </div>
        <div style={{ marginLeft: '40px' }}>
          <ProductBreakDown metaData={metaData} />
        </div>
      </div>

      <div style={{
        float: 'left',
        width: '70%',
      }}
      >
        <div>
          <h4>
            {`${Number(reviewCount.true) + Number(reviewCount.false)} reviews, sorted by`}
            <select onChange={handleDropDown}>
              <option value="0">Relevant</option>
              <option value="1">Helpful</option>
              <option value="2">Recent</option>
            </select>
          </h4>
        </div>
        <div>
          <ReviewList reviews={reviews} />
        </div>
        <div>
          <WriteReview />
        </div>
      </div>

      <div style={{
        clear: 'both',
      }}
      />
    </div>
  );
}
