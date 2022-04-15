import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakDown from './ratingBreakDown/RatingBreakDown.jsx';
import WriteReview from './writeReview/WriteReview.jsx';
import ProductBreakDown from './productBreakDown/ProductBreakDown.jsx';
import axios from 'axios';

export default function RatingsReviews({ product, onClick }) {
  const [reviews, setReviews] = useState([]);
  const [reviews2, setReviews2] = useState([]);
  const [metaData, setMetaData] = useState('');

  useEffect(() => {
    // getData(
    //   `reviews?page=1&count=1000&sort=relevant&product_id=${product.id}`,
    // ).then(({ data }) => {
    //   setReviews(data.results);
    //   setReviews2(data.results);
    // });
    axios({
      method: 'get',
      url: '/ratingsReviews/reviews',
      params: {
        productId: product.id,
      }
    }).then(({ data }) => {
      setReviews(data.results);
      setReviews2(data.results);
    })

    // getData(`reviews/meta?product_id=${product.id}`).then(({ data }) => {
    //   setMetaData(data);
    // });
    axios({
      method: 'get',
      url: '/ratingsReviews/meta',
      params: {
        productId: product.id,
      }
    }).then(({ data }) => {
      setMetaData(data);
    })
  }, [product.id]);

  const handleDropDown = (e) => {
    let dropDown = 'relevant';
    if (e.target.value === '1') {
      dropDown = 'helpful';
    } else if (e.target.value === '2') {
      dropDown = 'newest';
    } else if (e.target.value === '0') {
      dropDown = 'relevant';
    }
    // getData(
    //   `reviews?page=1&count=1000&sort=${dropDown}&product_id=${product.id}`,
    // ).then(({ data }) => {
    //   setReviews(data.results);
    // });

    axios({
      method: 'get',
      url: '/ratingsReviews/sort',
      params: {
        productId: product.id,
        dropDown: dropDown
      }
    }).then(({ data }) => {
      setReviews(data.results);
    })
  };

  const starFilter = (e) => {
    let starFilterReview = reviews2.filter((review) => review.rating == e);
    setReviews(starFilterReview);
  };

  const reviewCount = metaData.recommended || { true: 0, false: 0 };

  return (
    <div className='ratings-reviews' onClick={onClick}>
      <div
        style={{
          float: 'left',
          width: '30%',
        }}
      >
        <div>
          <RatingBreakDown metaData={metaData} starFilter={starFilter} />
        </div>
        <div>
          <ProductBreakDown metaData={metaData} />
        </div>
      </div>
      <div
        style={{
          float: 'left',
          width: '70%',
        }}
      >
        <div>
          <h4>
            {`${
              Number(reviews.length || 0)
            } reviews, sorted by `}
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
          <WriteReview name={product.name} />
        </div>
      </div>

      <div
        style={{
          clear: 'both',
        }}
      />
    </div>
  );
}
