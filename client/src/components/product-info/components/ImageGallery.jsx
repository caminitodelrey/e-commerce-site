import React, { useState } from 'react';
import styled from 'styled-components';

export default function ImageGallery({ photoList }) {
  const [mainPhoto, setMainPhoto] = useState(0);

  const handleClick = (index) => {
    setMainPhoto(index);
  };

  return (
    <div>
      {photoList.map((photo, index) => (
        <GalleryThumb
          key={photo.url}
          src={photo.thumbnail_url}
          onClick={() => handleClick(index)}
        />
      ))}
      <BigImage src={photoList[mainPhoto].url} alt="" />
    </div>
  );
}

const GalleryThumb = styled.img`
  width: 100px;
  height: 100px;
`;

const BigImage = styled.img`
  max-width:700px;
  max-height:700px;
`;
