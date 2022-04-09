import React, { useState } from 'react';

export default function ReviewPicsUnit({ src }) {
  const [showPic, setShowPic] = useState(false);

  const handleShowPic = () => {
    setShowPic(!showPic);
  };

  const stylePic = !showPic
    ? { height: '150px', width: '150px'}
    : {
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: '0',
      left: '0',
      zIndex: '10',
      background: 'rgba(255,255,255,.7)',
    };

  const stylePic2 = !showPic
    ? { height: '150px', width: '150px', paddingRight: '10px', cursor: 'pointer' }
    : {
      height: '400px',
      width: '400px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      marginTop: '-200px',
      marginLeft: '-200px',
      borderRadius: '20px'
    };

  return (
    <span style={stylePic}>
      {!showPic ? null : (
        <p
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            zIndex: '11',
            marginLeft: '180px',
            marginTop: '-195px',
            fontSize: ' 20px',
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
