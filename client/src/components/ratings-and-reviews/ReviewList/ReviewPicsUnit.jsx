import React, { useState } from 'react';

export default function ReviewPicsUnit({ src }) {
  const [showPic, setShowPic] = useState(false);

  const handleShowPic = () => {
    setShowPic(!showPic);
  };

  const stylePic = !showPic
    ? { height: '150px', width: '150px' }
    : {
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: '0',
      left: '0',
      'z-index': '10',
      background: 'rgba(255,255,255,.7)',
    };

  const stylePic2 = !showPic
    ? { height: '150px', width: '150px' }
    : {
      height: '400px',
      width: '400px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      'margin-top': '-200px',
      'margin-left': '-200px',
    };

  return (
    <span style={stylePic}>
      {!showPic ? null : (
        <p
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            'z-index': '11',
            'margin-left': '180px',
            'margin-top': '-195px',
            'font-size': ' 20px',
            cursor: 'pointer',
          }}
          onClick={handleShowPic}
          aria-hidden="true"
        >
          x
        </p>
      )}
      <img
        style={stylePic2}
        src={src}
        alt=""
        onClick={handleShowPic}
        aria-hidden="true"
      />
    </span>
  );
}
