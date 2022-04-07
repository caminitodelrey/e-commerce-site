import React from 'react';

export default function PercentageBar(props) {
  const { key, star, percent } = props;

  const containerStyles = {
    height: 15,
    width: '30%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${percent}%`,
    backgroundColor: 'green',
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
      {`${star} stars`}
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${percent}%`}</span>
        </div>
      </div>
    </div>
  );
}
