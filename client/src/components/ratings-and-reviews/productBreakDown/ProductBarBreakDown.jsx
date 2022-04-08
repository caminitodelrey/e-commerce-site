import React from 'react';

export default function ProductBarBreakDown({ product }) {
  const { percent, characteristic, fit } = product;

  const containerStyles = {
    height: 15,
    width: '90%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    position: 'relative',
  };

  const fillerStyles = {
    borderRadius: 'inherit',
    textAlign: 'right',
    marginLeft: `${percent === 0 ? 0 : percent - 5}%`,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '10px 10px 0 10px',
    borderColor: 'black transparent transparent transparent',
    position: 'absolute',
    marginTop: '-11px',
  };

  return (

    <div>
      {percent === 0 ? null : (
        <div
          style={{
            paddingBottom: '20px',
          }}
        >
          <div
            style={{
              paddingBottom: '20px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            {characteristic}
          </div>
          <div style={containerStyles}>
            <div style={fillerStyles} />
            <div style={{ fontSize: '12px' }}>{fit[0]}</div>
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                fontSize: '12px',
              }}
            >
              {fit[1]}
            </div>
          </div>
        </div>
      ) }
    </div>

  );
}
