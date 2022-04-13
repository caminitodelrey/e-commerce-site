import React, { useState, useEffect } from 'react';
import { QASearch } from '../../../theme/headerStyle.js';;

export default function SearchQA({ product, handleSearchFilter }) {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    handleSearchFilter(searchText);
  }, [searchText]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => { // Refactor to work with enter key and search
    if (e.keyCode === 13) {
      handleSearchFilter(searchText);
    }
  };

  return (
    // <QASearch>
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
          border: '2px solid rgb(169,169,169)'
        }}
        value={searchText}
        onChange={handleSearchChange}
        onKeyDown={(e) => handleSearchSubmit(e)}
        placeholder={`Have a question about the ${product.name}? Search for answers...`}
      />
      <i role="presentation" />
    </div>
    // </QASearch>
  );
}
