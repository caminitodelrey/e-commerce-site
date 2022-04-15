import React, { useState, useEffect } from 'react';
import { QASearch } from '../../../theme/headerStyle.js';

export default function SearchQA({ product, handleSearchFilter }) {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    handleSearchFilter(searchText);
  }, [searchText]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input
        id="search"
        type="search"
        autoComplete="off"
        maxLength="150"
        style={{
          height: '50px',
          width: '800px',
          borderRadius: '25px',
          padding: '12px',
          backgroundColor: 'rgb(245,245,245)',
          border: '2px solid rgb(169,169,169)',
        }}
        value={searchText}
        onChange={handleSearchChange}
        placeholder={`Have a question about the ${product.name}? Search for answers...`}
      />
      <i role="presentation" />
    </div>
  );
}
