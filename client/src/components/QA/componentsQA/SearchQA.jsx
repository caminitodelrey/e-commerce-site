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

  const handleSearchSubmit = (e) => {
    if (e.keyCode === 13) {
      // console.log(`Searching Questions for ${searchText}`); // delete later
      handleSearchFilter(searchText);
    }
  };

  return (
    <QASearch>
      <input
        id="search"
        type="search"
        autoComplete="off"
        maxLength="150"
        style={{
          height: '30px',
          width: '700px',
        }}
        value={searchText}
        onChange={handleSearchChange}
        onKeyDown={(e) => handleSearchSubmit(e)}
        placeholder={`Have a question about the ${product.name}? Search for answers...`}
      />
      <i role="presentation" />
    </QASearch>
  );
}
