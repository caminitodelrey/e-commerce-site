import React from 'react';

export default function PercentageBar(props) {
  const { key, star, percent } = props;

  const containerStyles = {
    height: 20,
    width: '90%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${percent || 0}%`,
    backgroundColor: 'rgba(11,191,125,.9)',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div key={key}>
      <div style={{ cursor: 'pointer' }}>
        {`${star} stars`}
      </div>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${percent || 0}%`}</span>
        </div>
      </div>
    </div>
  );
}
